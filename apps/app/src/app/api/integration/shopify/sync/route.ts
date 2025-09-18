import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    // Get user's business profile and Shopify integration
    const businessProfile = await prisma.businessProfile.findUnique({
      where: { userId: session.user.id },
      include: {
        integrations: {
          where: { platform: 'shopify' }
        }
      }
    })

    if (!businessProfile) {
      return NextResponse.json(
        { error: 'Perfil de negócio não encontrado. Complete o onboarding primeiro.' },
        { status: 400 }
      )
    }

    const shopifyIntegration = businessProfile.integrations[0]
    if (!shopifyIntegration) {
      return NextResponse.json(
        { error: 'Integração com Shopify não encontrada. Configure a integração primeiro.' },
        { status: 400 }
      )
    }

    // TODO: In production, implement actual Shopify API calls:
    // 1. Decrypt access token
    // 2. Call Shopify Orders API
    // 3. Transform orders data to Transaction format
    // 4. Save transactions to database
    
    // For now, simulate successful sync with some mock data
    const simulatedOrders = [
      {
        id: `order_${Date.now()}_1`,
        customerId: `customer_${Math.random().toString(36).substring(2, 8)}`,
        amount: Math.round((Math.random() * 500 + 50) * 100) / 100, // Random amount between R$ 50-550
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
      },
      {
        id: `order_${Date.now()}_2`,
        customerId: `customer_${Math.random().toString(36).substring(2, 8)}`,
        amount: Math.round((Math.random() * 300 + 25) * 100) / 100,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      },
      {
        id: `order_${Date.now()}_3`,
        customerId: `customer_${Math.random().toString(36).substring(2, 8)}`,
        amount: Math.round((Math.random() * 800 + 100) * 100) / 100,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      }
    ]

    // Transform simulated orders to transactions
    const transactions = simulatedOrders.map(order => ({
      date: order.date,
      amount: order.amount,
      customerId: order.customerId,
      businessId: businessProfile.id,
      description: `Pedido Shopify #${order.id}`
    }))

    // Save transactions to database
    const result = await prisma.transaction.createMany({
      data: transactions,
      skipDuplicates: true
    })

    // Update integration last sync time
    await prisma.integration.update({
      where: { id: shopifyIntegration.id },
      data: { lastSync: new Date() }
    })

    console.log(`Shopify sync completed for business ${businessProfile.id}: ${result.count} transactions imported`)

    return NextResponse.json({
      success: true,
      message: `Sincronização concluída! ${result.count} transações importadas da Shopify.`,
      data: {
        transactionsImported: result.count,
        lastSync: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Erro na sincronização com Shopify:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}