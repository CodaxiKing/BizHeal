import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

interface TransactionData {
  date: string
  amount: number
  customerId: string
}

interface UploadRequestBody {
  transactions: TransactionData[]
}

// Normalize date to start of day in UTC to ensure consistency
function normalizeDate(dateString: string): Date {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    throw new Error('Data inválida')
  }
  
  // Set to start of day in UTC to avoid timezone issues
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
}

// Create unique key for deduplication
function createTransactionKey(businessId: string, customerId: string, date: Date, amount: number): string {
  return `${businessId}:${customerId}:${date.getTime()}:${amount}`
}

// Process transactions in batches to avoid parameter limits
async function saveTransactionsBatches(transactions: any[], batchSize = 1000): Promise<number> {
  let totalCreated = 0
  
  for (let i = 0; i < transactions.length; i += batchSize) {
    const batch = transactions.slice(i, i + batchSize)
    const result = await prisma.transaction.createMany({
      data: batch,
      skipDuplicates: true
    })
    totalCreated += result.count
  }
  
  return totalCreated
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Get user's business profile
    const businessProfile = await prisma.businessProfile.findUnique({
      where: { userId: session.user.id }
    })

    if (!businessProfile) {
      return NextResponse.json(
        { error: 'Perfil de negócio não encontrado. Complete o onboarding primeiro.' },
        { status: 400 }
      )
    }

    // Parse request body
    let body: UploadRequestBody
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        { error: 'Dados inválidos' },
        { status: 400 }
      )
    }

    // Validate request data
    if (!body.transactions || !Array.isArray(body.transactions)) {
      return NextResponse.json(
        { error: 'Lista de transações é obrigatória' },
        { status: 400 }
      )
    }

    if (body.transactions.length === 0) {
      return NextResponse.json(
        { error: 'Nenhuma transação foi enviada' },
        { status: 400 }
      )
    }

    if (body.transactions.length > 10000) {
      return NextResponse.json(
        { error: 'Máximo de 10.000 transações por upload' },
        { status: 400 }
      )
    }

    // Validate and normalize transactions
    const validatedTransactions = []
    const errors = []
    const seenKeys = new Set<string>()

    for (let i = 0; i < body.transactions.length; i++) {
      const transaction = body.transactions[i]
      
      try {
        // Validate required fields
        if (!transaction.date || !transaction.customerId || typeof transaction.amount !== 'number') {
          errors.push(`Transação ${i + 1}: Campos obrigatórios ausentes ou inválidos`)
          continue
        }

        // Validate and normalize date
        const normalizedDate = normalizeDate(transaction.date)

        // Validate amount - must be positive for sales data
        if (isNaN(transaction.amount) || transaction.amount <= 0) {
          errors.push(`Transação ${i + 1}: Valor deve ser positivo`)
          continue
        }

        // Validate customer ID
        const customerId = transaction.customerId.trim()
        if (!customerId) {
          errors.push(`Transação ${i + 1}: ID do cliente não pode estar vazio`)
          continue
        }

        // Check for duplicates within the same payload
        const transactionKey = createTransactionKey(
          businessProfile.id, 
          customerId, 
          normalizedDate, 
          transaction.amount
        )

        if (seenKeys.has(transactionKey)) {
          // Skip duplicate within same payload
          continue
        }
        seenKeys.add(transactionKey)

        validatedTransactions.push({
          date: normalizedDate,
          amount: transaction.amount,
          customerId: customerId,
          businessId: businessProfile.id,
          description: `Venda para cliente ${customerId}`
        })

      } catch (error) {
        errors.push(`Transação ${i + 1}: ${error instanceof Error ? error.message : 'Erro de validação'}`)
      }
    }

    // If there are validation errors, return them
    if (errors.length > 0) {
      return NextResponse.json(
        { 
          error: 'Erros de validação encontrados',
          details: errors.slice(0, 10) // Return first 10 errors
        },
        { status: 400 }
      )
    }

    if (validatedTransactions.length === 0) {
      return NextResponse.json(
        { error: 'Nenhuma transação válida encontrada' },
        { status: 400 }
      )
    }

    // Save transactions to database in batches
    // The unique constraint will handle DB-level duplicates
    const totalCreated = await saveTransactionsBatches(validatedTransactions)
    const duplicatesSkipped = validatedTransactions.length - totalCreated

    // Return success response
    return NextResponse.json({
      success: true,
      count: totalCreated,
      duplicates: duplicatesSkipped,
      message: `${totalCreated} transações importadas com sucesso${
        duplicatesSkipped > 0 
          ? `. ${duplicatesSkipped} duplicatas ignoradas.`
          : '.'
      }`
    })

  } catch (error) {
    console.error('Erro no upload de dados:', error)
    
    // Handle unique constraint violations
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'Algumas transações já existem no sistema.' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}