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

    const userId = session.user.id as string

    // Get subscription from database
    const subscription = await prisma.subscription.findUnique({
      where: { userId }
    })

    return NextResponse.json({ 
      subscription 
    })

  } catch (error) {
    console.error('Subscription fetch error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}