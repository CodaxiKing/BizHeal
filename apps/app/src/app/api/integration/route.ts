import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

export async function GET(request: NextRequest) {
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
      where: { userId: session.user.id },
      include: {
        integrations: true
      }
    })

    if (!businessProfile) {
      return NextResponse.json(
        { error: 'Perfil de negócio não encontrado. Complete o onboarding primeiro.' },
        { status: 400 }
      )
    }

    // Return integrations for this business
    return NextResponse.json({
      success: true,
      integrations: businessProfile.integrations.map(integration => ({
        id: integration.id,
        platform: integration.platform,
        shopUrl: integration.shopUrl,
        lastSync: integration.lastSync,
        createdAt: integration.createdAt,
        // Never return sensitive tokens to frontend
      }))
    })

  } catch (error) {
    console.error('Erro ao buscar integrações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}