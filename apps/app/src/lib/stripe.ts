// Stripe configuration and utilities
import Stripe from 'stripe'

// Initialize Stripe only if secret key is provided
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
      typescript: true,
    })
  : null

// BizHeal Stripe Price IDs (to be configured in Stripe Dashboard)
export const PRICE_IDS = {
  PRO_MONTHLY: process.env.STRIPE_PRO_PRICE_ID || 'price_pro_monthly',
  ENTERPRISE_MONTHLY: process.env.STRIPE_ENTERPRISE_PRICE_ID || 'price_enterprise_monthly',
}

// Plan configurations matching the marketing site
export const PLANS = {
  BASIC: {
    id: 'basic',
    name: 'Básico',
    price: 0,
    priceId: null,
    features: [
      'Scanner básico de gargalos',
      '1 relatório completo por mês',
      'Dashboard básico',
      'Suporte via email'
    ]
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 19700, // R$ 197.00 in cents
    priceId: PRICE_IDS.PRO_MONTHLY,
    features: [
      'Relatórios ilimitados',
      'Integrações com 50+ sistemas',
      'Alertas inteligentes em tempo real',
      'Dashboard avançado personalizado',
      'API para integrações customizadas',
      'Suporte prioritário'
    ]
  },
  ENTERPRISE: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 49700, // R$ 497.00 in cents
    priceId: PRICE_IDS.ENTERPRISE_MONTHLY,
    features: [
      'IA Preditiva avançada',
      'Workflows automatizados',
      'Consultoria estratégica mensal',
      'Suporte dedicado 24/7',
      'White-label disponível',
      'SLA garantido de 99,9%'
    ]
  }
}

export type PlanType = keyof typeof PLANS