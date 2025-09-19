import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'
import { AnalysisService, type RevenueConcentrationResult } from '@/services/AnalysisService'
import { NotificationService } from '@/services/NotificationService'

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const userId = session.user.id

    // Get user's business profile
    const businessProfile = await prisma.businessProfile.findUnique({
      where: { userId }
    })

    if (!businessProfile) {
      return NextResponse.json({
        message: 'Complete seu perfil empresarial primeiro para ver análises.'
      })
    }

    // Get all transactions for this business
    const transactions = await prisma.transaction.findMany({
      where: {
        businessId: businessProfile.id
      }
    })

    if (transactions.length === 0) {
      return NextResponse.json({
        message: 'Nenhuma transação encontrada. Importe seus dados primeiro para ver análises de concentração de receita.'
      })
    }

    // Calculate revenue concentration using the AnalysisService
    const concentrationResult = AnalysisService.calculateRevenueConcentration(transactions)

    // Check and create concentration notification if needed
    await NotificationService.checkAndCreateConcentrationNotification(
      businessProfile.id,
      concentrationResult.concentrationPercentage
    )

    return NextResponse.json(concentrationResult)

  } catch (error) {
    console.error('Revenue concentration analysis error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}