import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stripe, PLANS } from '@/lib/stripe'
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

    const { planId, successUrl, cancelUrl } = await request.json()

    // Validate plan
    const plan = PLANS[planId as keyof typeof PLANS]
    if (!plan || !plan.priceId) {
      return NextResponse.json(
        { error: 'Plano inválido' },
        { status: 400 }
      )
    }

    const userId = session.user.id as string

    // Get or create Stripe customer
    let customer = await prisma.user.findUnique({
      where: { id: userId },
      include: { subscription: true }
    })

    let stripeCustomerId = customer?.subscription?.stripeCustomerId

    if (!stripeCustomerId) {
      // Create Stripe customer
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email!,
        name: session.user.name || undefined,
        metadata: {
          userId: userId,
        },
      })
      
      stripeCustomerId = stripeCustomer.id

      // Create or update subscription record
      await prisma.subscription.upsert({
        where: { userId },
        update: { stripeCustomerId },
        create: {
          userId,
          stripeCustomerId,
          status: 'TRIALING'
        }
      })
    }

    // Create Stripe Checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl || `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
      metadata: {
        userId: userId,
        planId: planId,
      },
      subscription_data: {
        metadata: {
          userId: userId,
          planId: planId,
        },
      },
    })

    return NextResponse.json({ 
      checkoutUrl: checkoutSession.url 
    })

  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}