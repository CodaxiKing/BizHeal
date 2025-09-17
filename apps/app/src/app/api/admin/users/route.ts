import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'
import type { Session } from 'next-auth'

export async function GET(request: NextRequest) {
  try {
    const session: Session | null = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id as string }
    })

    if (!currentUser || currentUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem acessar.' },
        { status: 403 }
      )
    }

    // Get all users with their subscriptions and business profiles
    const users = await prisma.user.findMany({
      include: {
        subscription: {
          select: {
            status: true,
            stripePriceId: true,
            currentPeriodEnd: true,
          }
        },
        businessProfile: {
          select: {
            companyName: true,
            industry: true,
            companySize: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Remove sensitive data
    const safeUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      subscription: user.subscription,
      businessProfile: user.businessProfile
    }))

    return NextResponse.json({ 
      users: safeUsers 
    })

  } catch (error) {
    console.error('Admin users fetch error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}