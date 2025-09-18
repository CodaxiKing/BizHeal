import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

interface MonthlyRevenue {
  month: string
  revenue: number
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

    // Get transactions from the last 12 months
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    const transactions = await prisma.transaction.findMany({
      where: {
        businessId,
        date: {
          gte: oneYearAgo
        }
      },
      orderBy: { date: 'desc' }
    })

    if (transactions.length === 0) {
      return NextResponse.json({
        data: [],
        message: 'Nenhuma transação encontrada. Importe seus dados primeiro.'
      })
    }

    // Group transactions by month and sum revenue
    const monthlyRevenueMap = new Map<string, number>()

    transactions.forEach(transaction => {
      const date = new Date(transaction.date)
      const monthKey = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`
      const currentRevenue = monthlyRevenueMap.get(monthKey) || 0
      monthlyRevenueMap.set(monthKey, currentRevenue + transaction.amount)
    })

    // Convert to array and sort by date
    const monthlyRevenueData: MonthlyRevenue[] = []
    
    // Generate last 12 months to ensure we have all months (including zero revenue months)
    const currentDate = new Date()
    for (let i = 11; i >= 0; i--) {
      const date = new Date()
      date.setMonth(currentDate.getMonth() - i)
      const monthKey = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`
      const revenue = monthlyRevenueMap.get(monthKey) || 0
      
      monthlyRevenueData.push({
        month: monthKey,
        revenue: Math.round(revenue * 100) / 100 // Round to 2 decimal places
      })
    }

    // Calculate additional metrics
    const totalRevenue = monthlyRevenueData.reduce((sum, item) => sum + item.revenue, 0)
    const averageMonthlyRevenue = totalRevenue / 12
    const highestMonth = monthlyRevenueData.reduce((prev, current) => 
      current.revenue > prev.revenue ? current : prev
    )
    const lowestMonth = monthlyRevenueData.reduce((prev, current) => 
      current.revenue < prev.revenue ? current : prev
    )

    const response = {
      data: monthlyRevenueData,
      metrics: {
        totalRevenue: Math.round(totalRevenue * 100) / 100,
        averageMonthlyRevenue: Math.round(averageMonthlyRevenue * 100) / 100,
        highestMonth: {
          month: highestMonth.month,
          revenue: highestMonth.revenue
        },
        lowestMonth: {
          month: lowestMonth.month,
          revenue: lowestMonth.revenue
        },
        totalTransactions: transactions.length
      }
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Monthly revenue analysis error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}