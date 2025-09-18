import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { prisma } from '@bizheal/db'
import type { Session } from 'next-auth'

export async function POST(request: NextRequest) {
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

    if (!subscription?.stripeCustomerId) {
      return NextResponse.json(
        { error: 'Cliente Stripe não encontrado' },
        { status: 404 }
      )
    }

    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe não configurado' },
        { status: 500 }
      )
    }
    
    // Create Stripe Billing Portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: subscription.stripeCustomerId,
      return_url: `${process.env.NEXTAUTH_URL}/settings/billing`,
    })

    return NextResponse.json({ url: portalSession.url })

  } catch (error) {
    console.error('Customer portal error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}