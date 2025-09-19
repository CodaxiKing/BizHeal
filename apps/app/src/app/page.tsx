'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@bizheal/ui'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading

    // If user is authenticated, redirect to dashboard
    if (session) {
      router.push('/dashboard')
    }
    // If user is not authenticated, show the homepage instead of redirecting to login
  }, [session, status, router])

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  // If user is authenticated, they will be redirected to dashboard
  // If not authenticated, show the marketing homepage
  return (
    <div className="min-h-screen">
      {/* Navigation - Using the new Navbar component */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Container with Rounded Box */}
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
                <div className="flex items-center mb-6">
                  <h1 className="text-xl font-bold text-white">BizHeal</h1>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Controle financeiro<br />
                  <span className="text-blue-200">inteligente para</span><br />
                  seu negócio crescer
                </h2>
                
                <p className="text-lg text-blue-100 mb-8 max-w-md">
                  Organize seu financeiro. Controle total da operação.
                </p>
                
                <div>
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-4 font-semibold rounded-full"
                    onClick={() => router.push('/register')}
                  >
                    Teste Grátis
                  </Button>
                </div>
              </div>

              {/* Right Content - Image/Person Area */}
              <div className="relative flex items-center justify-center p-8 lg:p-12">
                {/* Placeholder for person image */}
                <div className="relative">
                  {/* Person silhouette/placeholder */}
                  <div className="w-80 h-96 bg-gradient-to-b from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center opacity-40">
                    <svg className="w-24 h-24 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  
                  {/* Floating UI Elements */}
                  {/* Chart Card */}
                  <div className="absolute -top-4 -left-8 lg:-left-8 md:-left-4 bg-white rounded-xl p-3 lg:p-4 shadow-lg scale-75 lg:scale-100">
                    <div className="text-xs text-gray-500 mb-2">Fluxo de caixa diário</div>
                    <svg className="w-20 lg:w-24 h-10 lg:h-12" viewBox="0 0 100 50">
                      <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        points="0,40 20,30 40,20 60,15 80,10 100,5"
                      />
                    </svg>
                  </div>
                  
                  {/* Value Cards */}
                  <div className="absolute top-12 -right-6 lg:-right-6 md:-right-3 bg-white rounded-lg p-2 lg:p-3 shadow-lg scale-75 lg:scale-100">
                    <div className="text-xs text-gray-500">Receita Mensal</div>
                    <div className="text-sm lg:text-lg font-bold text-green-600">R$ 45.890,00</div>
                  </div>
                  
                  <div className="absolute top-32 -right-8 lg:-right-8 md:-right-4 bg-white rounded-lg p-2 lg:p-3 shadow-lg scale-75 lg:scale-100 hidden md:block">
                    <div className="text-xs text-gray-500">Despesas</div>
                    <div className="text-sm lg:text-lg font-bold text-orange-600">R$ 18.450,00</div>
                  </div>
                  
                  <div className="absolute bottom-12 -left-6 lg:-left-6 md:-left-3 bg-white rounded-lg p-2 lg:p-3 shadow-lg scale-75 lg:scale-100">
                    <div className="text-xs text-gray-500">Lucro Líquido</div>
                    <div className="text-sm lg:text-lg font-bold text-blue-600">R$ 27.440,00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* System Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Um <strong>Sistema Inteligente</strong> simples e seguro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plataforma completa para gestão financeira e análise de dados do seu negócio.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gestão Financeira */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600">Gestão Financeira</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Controle total do seu <br />fluxo de caixa
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Acompanhe receitas, despesas e fluxo de caixa em tempo real. 
                  Tenha visão completa da saúde financeira do seu negócio.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => router.push('/features')}
                >
                  Saiba mais sobre Gestão Financeira
                </Button>
                <div className="flex space-x-4 mt-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Fluxo de Caixa</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Contas a Pagar</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Contas a Receber</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="bg-blue-50 p-6 rounded-lg mb-4">
                      <svg className="w-16 h-16 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Dashboard Financeiro</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Análise de Dados */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="bg-green-50 p-6 rounded-lg mb-4">
                      <svg className="w-16 h-16 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Relatórios Inteligentes</h4>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green-600">Análise Inteligente</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Insights que impulsionam <br />seu crescimento
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Nossa IA analisa seus dados e identifica oportunidades de otimização, 
                  ajudando você a tomar decisões mais inteligentes.
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => router.push('/insights')}
                >
                  Descubra os Insights
                </Button>
                <div className="flex space-x-4 mt-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Análise de Churn</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Previsões</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Relatórios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integração */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-purple-600">Integração Automática</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Conecte seus sistemas <br />em poucos cliques
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Importe dados automaticamente de diversas plataformas como Shopify, 
                  sistemas bancários e ERPs existentes.
                </p>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => router.push('/integrations')}
                >
                  Ver Integrações
                </Button>
                <div className="flex space-x-4 mt-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Shopify</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Bancos</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">CSV</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="bg-purple-50 p-6 rounded-lg mb-4">
                      <svg className="w-16 h-16 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Sync Automático</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-lg text-blue-600 font-medium">BizHeal - O futuro da gestão financeira inteligente</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transforme dados em <br />decisões inteligentes!
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Nossa plataforma analisa seus dados financeiros e oferece insights práticos para o crescimento do seu negócio.
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 mb-16"
            onClick={() => router.push('/register')}
          >
            Teste Grátis
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Análise Automatizada</div>
              <div className="text-gray-600">Identifica padrões e oportunidades nos seus dados financeiros automaticamente.</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">⚡</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Setup Rápido</div>
              <div className="text-gray-600">Conecte suas fontes de dados e comece a receber insights em minutos.</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">📊</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Relatórios Inteligentes</div>
              <div className="text-gray-600">Dashboards e relatórios que ajudam na tomada de decisões estratégicas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para ter controle total das suas finanças?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experimente o BizHeal gratuitamente e descubra como nossa IA pode transformar sua gestão financeira.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => router.push('/register')}
          >
            Começar Teste Grátis
          </Button>
          <p className="text-sm text-blue-200 mt-4">
            Sem compromisso • Setup em minutos • Suporte especializado
          </p>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">© 2024 BizHeal. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}