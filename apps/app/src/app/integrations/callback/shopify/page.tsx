'use client'

import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function ShopifyCallbackPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    const authCode = searchParams.get('code')
    const shopUrl = searchParams.get('shop')

    if (!authCode || !shopUrl) {
      setError('Parâmetros de autorização ausentes')
      setLoading(false)
      return
    }

    connectToShopify(authCode, shopUrl)
  }, [session, status, router, searchParams])

  const connectToShopify = async (authCode: string, shopUrl: string) => {
    try {
      const response = await fetch('/api/integration/shopify/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authCode,
          shopUrl
        })
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        // Redirect to integrations page after 3 seconds
        setTimeout(() => {
          router.push('/dashboard/integrations')
        }, 3000)
      } else {
        setError(data.error || 'Erro na conexão com Shopify')
      }
    } catch (error) {
      console.error('Erro na conexão com Shopify:', error)
      setError('Erro interno. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Conectando com Shopify...</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Aguarde enquanto processamos sua autorização
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect to login
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md border-green-200 bg-green-50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-green-700">
              <CheckCircle2 className="h-6 w-6" />
              <span>Conexão Bem-sucedida!</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-green-700">
              Sua loja Shopify foi conectada com sucesso ao BizHeal.
            </p>
            <p className="text-sm text-green-600">
              Redirecionando para a página de integrações...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md border-red-200 bg-red-50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-red-700">
              <AlertCircle className="h-6 w-6" />
              <span>Erro na Conexão</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => router.push('/dashboard/integrations')}
              className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Voltar para Integrações
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}