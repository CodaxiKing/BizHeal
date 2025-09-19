import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NotificationService } from '@/services/NotificationService'
import { prisma } from '@bizheal/db'

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
        notifications: [],
        message: 'Complete seu perfil empresarial primeiro.'
      })
    }

    // Get unread notifications
    const notifications = await NotificationService.getUnreadNotifications(businessProfile.id)

    return NextResponse.json({
      notifications: notifications.map(notification => ({
        id: notification.id,
        title: notification.title,
        description: notification.description,
        type: notification.type,
        createdAt: notification.createdAt
      })),
      count: notifications.length
    })

  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}