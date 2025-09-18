import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'

interface ShopifyConnectRequest {
  authCode: string
  shopUrl: string
}

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

    // Get user's business profile
    const businessProfile = await prisma.businessProfile.findUnique({
      where: { userId: session.user.id }
    })

    if (!businessProfile) {
      return NextResponse.json(
        { error: 'Perfil de negócio não encontrado. Complete o onboarding primeiro.' },
        { status: 400 }
      )
    }

    // Parse request body
    let body: ShopifyConnectRequest
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        { error: 'Dados inválidos' },
        { status: 400 }
      )
    }

    // Validate request data
    if (!body.authCode || !body.shopUrl) {
      return NextResponse.json(
        { error: 'Código de autorização e URL da loja são obrigatórios' },
        { status: 400 }
      )
    }

    // Validate shop URL format
    const shopUrlRegex = /^https:\/\/[a-zA-Z0-9-]+\.myshopify\.com$/
    if (!shopUrlRegex.test(body.shopUrl)) {
      return NextResponse.json(
        { error: 'URL da loja Shopify inválida. Deve ser no formato: https://sua-loja.myshopify.com' },
        { status: 400 }
      )
    }

    // In production, this would exchange the authCode for access token with Shopify API
    // For now, we simulate the OAuth exchange
    const simulatedAccessToken = `simulated_access_token_${Date.now()}_${Math.random().toString(36).substring(2)}`
    const simulatedRefreshToken = `simulated_refresh_token_${Date.now()}_${Math.random().toString(36).substring(2)}`

    // TODO: In production, implement actual Shopify OAuth flow:
    // 1. Exchange authCode for access token
    // 2. Validate the token with Shopify
    // 3. Encrypt tokens before storing
    
    // Store integration (upsert to handle reconnections)
    const integration = await prisma.integration.upsert({
      where: {
        businessId_platform: {
          businessId: businessProfile.id,
          platform: 'shopify'
        }
      },
      update: {
        accessToken: simulatedAccessToken, // MUST be encrypted in production
        refreshToken: simulatedRefreshToken, // MUST be encrypted in production
        shopUrl: body.shopUrl,
        scopes: 'read_orders,read_products,read_customers',
        lastSync: null, // Reset sync status on reconnection
      },
      create: {
        businessId: businessProfile.id,
        platform: 'shopify',
        accessToken: simulatedAccessToken, // MUST be encrypted in production
        refreshToken: simulatedRefreshToken, // MUST be encrypted in production
        shopUrl: body.shopUrl,
        scopes: 'read_orders,read_products,read_customers',
      }
    })

    console.log(`Shopify integration created/updated for business ${businessProfile.id}`)

    return NextResponse.json({
      success: true,
      message: 'Integração com Shopify criada com sucesso!',
      integration: {
        id: integration.id,
        platform: integration.platform,
        shopUrl: integration.shopUrl,
        createdAt: integration.createdAt,
        // Never return sensitive tokens
      }
    })

  } catch (error) {
    console.error('Erro na conexão com Shopify:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}