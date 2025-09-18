import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

interface TransactionData {
  date: string
  amount: number
  customerId: string
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado. Faça login primeiro.' },
        { status: 401 }
      )
    }

    // Get user's business profile
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { businessProfile: true }
    })

    if (!user?.businessProfile) {
      return NextResponse.json(
        { error: 'Perfil empresarial não encontrado. Complete seu onboarding primeiro.' },
        { status: 400 }
      )
    }

    const { transactions } = await request.json()

    // Validate input
    if (!transactions || !Array.isArray(transactions)) {
      return NextResponse.json(
        { error: 'Dados de transações inválidos.' },
        { status: 400 }
      )
    }

    if (transactions.length === 0) {
      return NextResponse.json(
        { error: 'Nenhuma transação fornecida.' },
        { status: 400 }
      )
    }

    if (transactions.length > 10000) {
      return NextResponse.json(
        { error: 'Máximo de 10.000 transações por upload.' },
        { status: 400 }
      )
    }

    // Validate each transaction
    const validatedTransactions: TransactionData[] = []
    const errors: string[] = []

    transactions.forEach((transaction: any, index: number) => {
      if (!transaction.date || !transaction.amount || !transaction.customerId) {
        errors.push(`Transação ${index + 1}: Dados obrigatórios ausentes`)
        return
      }

      if (typeof transaction.amount !== 'number' || isNaN(transaction.amount)) {
        errors.push(`Transação ${index + 1}: Valor inválido`)
        return
      }

      if (transaction.amount <= 0) {
        errors.push(`Transação ${index + 1}: Valor deve ser positivo`)
        return
      }

      const date = new Date(transaction.date)
      if (isNaN(date.getTime())) {
        errors.push(`Transação ${index + 1}: Data inválida`)
        return
      }

      if (typeof transaction.customerId !== 'string' || transaction.customerId.trim().length === 0) {
        errors.push(`Transação ${index + 1}: ID do cliente inválido`)
        return
      }

      validatedTransactions.push({
        date: transaction.date,
        amount: transaction.amount,
        customerId: transaction.customerId.trim()
      })
    })

    if (errors.length > 0) {
      return NextResponse.json(
        { 
          error: 'Erros de validação encontrados',
          details: errors.slice(0, 10) // Limit to first 10 errors
        },
        { status: 400 }
      )
    }

    // Save transactions to database
    const businessId = user.businessProfile.id
    
    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Delete existing transactions for this business (optional - could be configurable)
      // await tx.transaction.deleteMany({
      //   where: { businessId }
      // })

      // Create new transactions
      const created = await tx.transaction.createMany({
        data: validatedTransactions.map(transaction => ({
          date: new Date(transaction.date),
          amount: transaction.amount,
          customerId: transaction.customerId,
          businessId: businessId,
          description: `Venda para cliente ${transaction.customerId}`
        }))
      })

      return created
    })

    return NextResponse.json({
      success: true,
      count: result.count,
      message: `${result.count} transações importadas com sucesso.`
    })

  } catch (error) {
    console.error('Data upload error:', error)
    
    // Handle Prisma-specific errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'Algumas transações já existem no sistema.' },
          { status: 400 }
        )
      }
      
      if (error.message.includes('Foreign key constraint')) {
        return NextResponse.json(
          { error: 'Erro de referência no banco de dados.' },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}