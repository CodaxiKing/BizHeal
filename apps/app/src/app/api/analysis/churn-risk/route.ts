import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'
import Papa from 'papaparse'

interface CustomerActivity {
  customerId: string
  lastTransactionDate: Date
  daysSinceLastTransaction: number
  totalTransactions: number
  totalAmount: number
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado. Faça login primeiro.' },
        { status: 401 }
      )
    }

    // Check if CSV format is requested
    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format')

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

    const businessId = user.businessProfile.id

    // Get all transactions for this business
    const transactions = await prisma.transaction.findMany({
      where: { businessId },
      orderBy: { date: 'desc' }
    })

    if (transactions.length === 0) {
      return NextResponse.json({
        totalCustomers: 0,
        atRiskCustomersCount: 0,
        atRiskCustomersList: [],
        message: 'Nenhuma transação encontrada. Importe seus dados primeiro.'
      })
    }

    // Group transactions by customer
    const customerMap = new Map<string, {
      transactions: typeof transactions,
      lastDate: Date,
      totalAmount: number
    }>()

    transactions.forEach(transaction => {
      const existing = customerMap.get(transaction.customerId)
      if (existing) {
        existing.transactions.push(transaction)
        existing.totalAmount += transaction.amount
        if (transaction.date > existing.lastDate) {
          existing.lastDate = transaction.date
        }
      } else {
        customerMap.set(transaction.customerId, {
          transactions: [transaction],
          lastDate: transaction.date,
          totalAmount: transaction.amount
        })
      }
    })

    // Calculate churn risk for each customer
    const currentDate = new Date()
    const churnThresholdDays = 90 // 90 days without activity = at risk
    const customerActivities: CustomerActivity[] = []

    customerMap.forEach((data, customerId) => {
      const daysSinceLastTransaction = Math.floor(
        (currentDate.getTime() - data.lastDate.getTime()) / (1000 * 60 * 60 * 24)
      )

      customerActivities.push({
        customerId,
        lastTransactionDate: data.lastDate,
        daysSinceLastTransaction,
        totalTransactions: data.transactions.length,
        totalAmount: data.totalAmount
      })
    })

    // Sort by days since last transaction (most at risk first)
    customerActivities.sort((a, b) => b.daysSinceLastTransaction - a.daysSinceLastTransaction)

    // Identify customers at risk
    const atRiskCustomers = customerActivities.filter(
      customer => customer.daysSinceLastTransaction >= churnThresholdDays
    )

    // Calculate additional metrics
    const totalRevenue = customerActivities.reduce((sum, customer) => sum + customer.totalAmount, 0)
    const atRiskRevenue = atRiskCustomers.reduce((sum, customer) => sum + customer.totalAmount, 0)
    const averageTransactionValue = totalRevenue / transactions.length

    // Group customers by risk level
    const highRisk = customerActivities.filter(c => c.daysSinceLastTransaction > 180) // 6 months
    const mediumRisk = customerActivities.filter(c => 
      c.daysSinceLastTransaction > 90 && c.daysSinceLastTransaction <= 180
    ) // 3-6 months
    const lowRisk = customerActivities.filter(c => 
      c.daysSinceLastTransaction > 30 && c.daysSinceLastTransaction <= 90
    ) // 1-3 months

    const response = {
      totalCustomers: customerActivities.length,
      atRiskCustomersCount: atRiskCustomers.length,
      atRiskCustomersList: atRiskCustomers.slice(0, 20).map(customer => ({
        customerId: customer.customerId,
        lastTransactionDate: customer.lastTransactionDate.toISOString(),
        daysSinceLastTransaction: customer.daysSinceLastTransaction,
        totalTransactions: customer.totalTransactions,
        totalAmount: customer.totalAmount,
        riskLevel: customer.daysSinceLastTransaction > 180 ? 'high' : 
                  customer.daysSinceLastTransaction > 90 ? 'medium' : 'low'
      })),
      metrics: {
        totalRevenue,
        atRiskRevenue,
        averageTransactionValue,
        churnRate: (atRiskCustomers.length / customerActivities.length * 100).toFixed(1),
        riskDistribution: {
          high: highRisk.length,
          medium: mediumRisk.length,
          low: lowRisk.length,
          healthy: customerActivities.length - highRisk.length - mediumRisk.length - lowRisk.length
        }
      },
      insights: {
        mostAtRiskCustomer: atRiskCustomers[0] || null,
        averageDaysSinceLastPurchase: Math.round(
          customerActivities.reduce((sum, c) => sum + c.daysSinceLastTransaction, 0) / customerActivities.length
        ),
        topCustomerByRevenue: customerActivities.reduce((prev, current) => 
          current.totalAmount > prev.totalAmount ? current : prev
        ),
        recentTransactions: transactions.slice(0, 5).map(t => ({
          customerId: t.customerId,
          amount: t.amount,
          date: t.date.toISOString()
        }))
      }
    }

    // If CSV format is requested, generate and return CSV
    if (format === 'csv') {
      // Helper function to sanitize CSV fields against formula injection
      const sanitizeCSVField = (value: string | number): string => {
        const strValue = String(value)
        // Detect optional leading whitespace/control chars before dangerous tokens
        // This prevents bypasses like ' =1+1', '\t=1+1', '\uFEFF=1+1'
        if (/^[\s\u0000-\u001F\uFEFF]*[=+\-@]/.test(strValue)) {
          return `'${strValue}`
        }
        return strValue
      }

      // Get ALL at-risk customers (not just the sliced UI list)
      const allAtRiskCustomers = customerActivities.filter(
        customer => customer.daysSinceLastTransaction >= churnThresholdDays
      ).map(customer => ({
        ...customer,
        riskLevel: customer.daysSinceLastTransaction > 180 ? 'high' : 
                  customer.daysSinceLastTransaction > 90 ? 'medium' : 'low'
      }))

      // Prepare CSV data with improved formatting and sanitization
      const csvData = allAtRiskCustomers.map(customer => ({
        'ID do Cliente': sanitizeCSVField(customer.customerId),
        'Última Transação': sanitizeCSVField(new Date(customer.lastTransactionDate).toLocaleDateString('pt-BR')),
        'Dias Inativo': customer.daysSinceLastTransaction,
        'Total de Vendas': customer.totalTransactions,
        'Receita Total (R$)': customer.totalAmount.toFixed(2), // Numeric value without currency symbol
        'Nível de Risco': sanitizeCSVField(customer.riskLevel === 'high' ? 'Alto Risco' :
                                           customer.riskLevel === 'medium' ? 'Médio Risco' : 'Baixo Risco')
      }))

      // Generate CSV content with UTF-8 BOM and semicolon delimiter for Portuguese Excel
      const csv = Papa.unparse(csvData, {
        delimiter: ';', // Better for Portuguese Excel
        header: true
      })

      // Add UTF-8 BOM for proper Excel encoding
      const csvWithBOM = '\ufeff' + csv

      // Return CSV response with proper headers
      return new NextResponse(csvWithBOM, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="clientes_em_risco.csv"',
          'Cache-Control': 'no-cache'
        }
      })
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Churn analysis error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}