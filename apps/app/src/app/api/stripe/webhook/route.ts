import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@bizheal/db'
import Stripe from 'stripe'

// Disable body parsing to get raw body for webhook signature verification
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe não configurado' },
        { status: 500 }
      )
    }
    
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionChange(subscription)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook handling error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!userId || !customerId || !subscriptionId) {
    console.error('Missing metadata in checkout session:', session.id)
    return
  }

  // Get subscription details from Stripe
  if (!stripe) {
    console.error('Stripe not configured for checkout completion')
    return
  }
  
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  
  // Update database with subscription details
  await prisma.subscription.upsert({
    where: { userId },
    update: {
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      stripePriceId: subscription.items.data[0].price.id,
      status: mapSubscriptionStatus(subscription.status),
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    },
    create: {
      userId,
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      stripePriceId: subscription.items.data[0].price.id,
      status: mapSubscriptionStatus(subscription.status),
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    }
  })

  console.log(`Subscription created/updated for user ${userId}`)
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId

  if (!userId) {
    console.error('Missing userId in subscription metadata:', subscription.id)
    return
  }

  await prisma.subscription.updateMany({
    where: { stripeSubscriptionId: subscription.id },
    data: {
      stripePriceId: subscription.items.data[0].price.id,
      status: mapSubscriptionStatus(subscription.status),
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    }
  })

  console.log(`Subscription updated for user ${userId}`)
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await prisma.subscription.updateMany({
    where: { stripeSubscriptionId: subscription.id },
    data: {
      status: 'CANCELED',
      stripeSubscriptionId: null,
      stripePriceId: null,
    }
  })

  console.log(`Subscription canceled: ${subscription.id}`)
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  // Update subscription status to active if payment succeeded
  if (invoice.subscription) {
    await prisma.subscription.updateMany({
      where: { stripeSubscriptionId: invoice.subscription as string },
      data: { status: 'ACTIVE' }
    })
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  // Update subscription status to past due if payment failed
  if (invoice.subscription) {
    await prisma.subscription.updateMany({
      where: { stripeSubscriptionId: invoice.subscription as string },
      data: { status: 'PAST_DUE' }
    })
  }
}

// Helper function to map Stripe subscription status to our enum
function mapSubscriptionStatus(stripeStatus: string) {
  const statusMap: { [key: string]: any } = {
    'active': 'ACTIVE',
    'canceled': 'CANCELED',
    'incomplete': 'INCOMPLETE',
    'incomplete_expired': 'INCOMPLETE_EXPIRED',
    'past_due': 'PAST_DUE',
    'trialing': 'TRIALING',
    'unpaid': 'UNPAID'
  }

  return statusMap[stripeStatus] || 'INCOMPLETE'
}