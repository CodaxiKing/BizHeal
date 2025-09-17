'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

interface SubscriptionData {
  id: string
  status: string
  stripePriceId: string | null
  currentPeriodStart: string | null
  currentPeriodEnd: string | null
  cancelAtPeriodEnd: boolean
}

export default function BillingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    fetchSubscription()
  }, [session, status, router])

  const fetchSubscription = async () => {
    try {
      const response = await fetch('/api/subscription')
      if (response.ok) {
        const data = await response.json()
        setSubscription(data.subscription)
      }
    } catch (error) {
      console.error('Error fetching subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleManageSubscription = async () => {
    try {
      const response = await fetch('/api/stripe/customer-portal', {
        method: 'POST',
      })
      
      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      } else {
        console.error('Error creating customer portal session')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUpgrade = async (planId: string) => {
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          successUrl: `${window.location.origin}/settings/billing?success=true`,
          cancelUrl: `${window.location.origin}/settings/billing`,
        }),
      })

      if (response.ok) {
        const { checkoutUrl } = await response.json()
        window.location.href = checkoutUrl
      } else {
        console.error('Error creating checkout session')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const getCurrentPlan = () => {
    if (!subscription || subscription.status !== 'ACTIVE') {
      return 'Básico (Gratuito)'
    }
    
    // Map price IDs to plan names (these should match your Stripe price IDs)
    const priceIdToPlan: { [key: string]: string } = {
      'price_pro_monthly': 'Pro',
      'price_enterprise_monthly': 'Enterprise'
    }

    return priceIdToPlan[subscription.stripePriceId || ''] || 'Básico'
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-600 bg-green-100'
      case 'TRIALING': return 'text-blue-600 bg-blue-100'
      case 'PAST_DUE': return 'text-yellow-600 bg-yellow-100'
      case 'CANCELED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'ACTIVE': 'Ativa',
      'TRIALING': 'Período de teste',
      'PAST_DUE': 'Pagamento em atraso',
      'CANCELED': 'Cancelada',
      'INCOMPLETE': 'Incompleta',
      'UNPAID': 'Não paga'
    }
    return statusMap[status] || status
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => router.push('/dashboard')}
                className="mr-4"
              >
                ← Voltar ao Dashboard
              </Button>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🩺</span>
                <h1 className="text-2xl font-bold text-gray-900">BizHeal</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Gerenciamento de Assinatura
          </h2>
          <p className="text-gray-600">
            Gerencie seu plano, faturamento e preferências de pagamento
          </p>
        </div>

        <div className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Plano Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{getCurrentPlan()}</h3>
                  {subscription && (
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subscription.status)}`}>
                          {getStatusText(subscription.status)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Período atual:</span>
                        <span>{formatDate(subscription.currentPeriodStart)} - {formatDate(subscription.currentPeriodEnd)}</span>
                      </div>
                      {subscription.cancelAtPeriodEnd && (
                        <div className="text-yellow-600 text-sm mt-2">
                          ⚠️ Sua assinatura será cancelada no fim do período atual
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <Button onClick={handleManageSubscription}>
                    Gerenciar Assinatura
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Options */}
          {(!subscription || subscription.status !== 'ACTIVE') && (
            <Card>
              <CardHeader>
                <CardTitle>Faça Upgrade do seu Plano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Pro</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">R$ 197<span className="text-sm text-gray-500">/mês</span></div>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• Relatórios ilimitados</li>
                      <li>• Integrações avançadas</li>
                      <li>• Alertas em tempo real</li>
                      <li>• Dashboard personalizado</li>
                    </ul>
                    <Button 
                      onClick={() => handleUpgrade('PRO')}
                      className="w-full"
                    >
                      Começar Teste de 14 Dias
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-2">R$ 497<span className="text-sm text-gray-500">/mês</span></div>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• IA Preditiva avançada</li>
                      <li>• Workflows automatizados</li>
                      <li>• Consultoria estratégica</li>
                      <li>• Suporte dedicado 24/7</li>
                    </ul>
                    <Button 
                      onClick={() => handleUpgrade('ENTERPRISE')}
                      variant="outline"
                      className="w-full"
                    >
                      Falar com Especialista
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Billing Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Faturamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Gerencie suas informações de pagamento, visualize faturas e atualize seus dados de faturamento 
                através do portal seguro do Stripe.
              </p>
              <Button 
                variant="outline" 
                onClick={handleManageSubscription}
              >
                Abrir Portal de Faturamento
              </Button>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Precisa de Ajuda?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Suporte ao Cliente</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Entre em contato conosco se tiver dúvidas sobre faturamento ou precisar de ajuda.
                  </p>
                  <Button variant="outline" size="sm">
                    Contatar Suporte
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Base de Conhecimento</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Encontre respostas para perguntas frequentes sobre planos e faturamento.
                  </p>
                  <Button variant="outline" size="sm">
                    Ver FAQ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}