'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, Button } from '@bizheal/ui'
// Replaced lucide-react icons with inline SVGs for consistency

interface Integration {
  id: string
  platform: string
  shopUrl?: string
  lastSync?: string
  createdAt: string
}

// Available integrations gallery
const AVAILABLE_INTEGRATIONS = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Sincronize automaticamente seus pedidos e dados de vendas',
    logo: 'store',
    status: 'available'
  },
  {
    id: 'bling',
    name: 'Bling',
    description: 'Conecte com seu ERP Bling para análise financeira',
    logo: 'chart',
    status: 'coming_soon'
  },
  {
    id: 'conta_azul',
    name: 'Conta Azul',
    description: 'Importe dados financeiros do seu Conta Azul',
    logo: 'calculator',
    status: 'coming_soon'
  }
]

export default function IntegrationsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [integrations, setIntegrations] = useState<Integration[]>([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/login')
    else fetchIntegrations()
  }, [session, status, router])

  const fetchIntegrations = async () => {
    try {
      const response = await fetch('/api/integration')
      const data = await response.json()
      if (data.success) {
        setIntegrations(data.integrations)
      }
    } catch (error) {
      console.error('Erro ao buscar integrações:', error)
    } finally {
      setLoading(false)
    }
  }

  const connectToShopify = () => {
    // In production, this would redirect to Shopify OAuth
    // For now, we simulate the OAuth flow
    const shopUrl = prompt('Digite a URL da sua loja Shopify (ex: https://sua-loja.myshopify.com):')
    if (shopUrl) {
      const authCode = `simulated_auth_code_${Date.now()}`
      router.push(`/integrations/callback/shopify?code=${authCode}&shop=${encodeURIComponent(shopUrl)}`)
    }
  }

  const syncShopifyData = async () => {
    setSyncing('shopify')
    try {
      const response = await fetch('/api/integration/shopify/sync', {
        method: 'POST'
      })
      const data = await response.json()
      
      if (data.success) {
        alert(data.message)
        fetchIntegrations() // Refresh integrations list
      } else {
        alert(`Erro: ${data.error}`)
      }
    } catch (error) {
      console.error('Erro na sincronização:', error)
      alert('Erro interno. Tente novamente.')
    } finally {
      setSyncing(null)
    }
  }

  const getIntegrationStatus = (platformId: string) => {
    return integrations.find(integration => integration.platform === platformId)
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Carregando integrações...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect to login
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Integrações</h1>
          <p className="text-gray-600 mt-2">
            Conecte suas plataformas para sincronização automática de dados
          </p>
        </div>
      </div>

      {/* Connected Integrations */}
      {integrations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Integrações Conectadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => {
              const platformInfo = AVAILABLE_INTEGRATIONS.find(p => p.id === integration.platform)
              return (
                <Card key={integration.id} className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{platformInfo?.logo || '🔗'}</span>
                        <div>
                          <CardTitle className="text-lg">{platformInfo?.name || integration.platform}</CardTitle>
                          <div className="flex items-center space-x-1 text-sm text-green-600">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Conectado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {integration.shopUrl && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="truncate">{integration.shopUrl}</span>
                      </div>
                    )}
                    {integration.lastSync && (
                      <p className="text-sm text-gray-600">
                        Última sincronização: {new Date(integration.lastSync).toLocaleString('pt-BR')}
                      </p>
                    )}
                    {integration.platform === 'shopify' && (
                      <Button 
                        onClick={syncShopifyData}
                        disabled={syncing === 'shopify'}
                        className="w-full"
                        size="sm"
                      >
                        {syncing === 'shopify' ? (
                          <>
                            <svg className="h-4 w-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Sincronizando...
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Sincronizar Dados
                          </>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Available Integrations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Integrações Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AVAILABLE_INTEGRATIONS.map((platform) => {
            const isConnected = getIntegrationStatus(platform.id)
            const isComingSoon = platform.status === 'coming_soon'
            
            return (
              <Card key={platform.id} className={`${isConnected ? 'opacity-50' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{platform.logo}</span>
                    <div>
                      <CardTitle className="text-lg">{platform.name}</CardTitle>
                      {isConnected && (
                        <div className="flex items-center space-x-1 text-sm text-green-600">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Conectado</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{platform.description}</p>
                  
                  {isConnected ? (
                    <Button disabled className="w-full" variant="outline">
                      ✅ Conectado
                    </Button>
                  ) : isComingSoon ? (
                    <Button disabled className="w-full" variant="outline">
                      Em Breve
                    </Button>
                  ) : (
                    <Button 
                      onClick={platform.id === 'shopify' ? connectToShopify : undefined}
                      className="w-full"
                    >
                      Conectar
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Como funciona?</h3>
        <div className="text-sm text-blue-700 space-y-2">
          <p>• <strong>Conecte:</strong> Autorize o BizHeal a acessar seus dados das plataformas</p>
          <p>• <strong>Sincronize:</strong> Seus dados são importados automaticamente de forma segura</p>
          <p>• <strong>Analise:</strong> O BizHeal processa os dados e gera insights para o seu negócio</p>
        </div>
      </div>
    </div>
  )
}