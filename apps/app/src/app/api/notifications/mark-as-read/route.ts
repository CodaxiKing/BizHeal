import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NotificationService } from '@/services/NotificationService'
import { prisma } from '@bizheal/db'

export async function POST(request: NextRequest) {
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
        error: 'Perfil empresarial não encontrado.'
      }, { status: 400 })
    }

    // Mark all notifications as read
    await NotificationService.markAllAsRead(businessProfile.id)

    return NextResponse.json({
      message: 'Todas as notificações foram marcadas como lidas.'
    })

  } catch (error) {
    console.error('Error marking notifications as read:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}