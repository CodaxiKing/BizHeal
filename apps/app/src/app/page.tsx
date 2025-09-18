'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@bizheal/ui'

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
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl mr-2">🩺</span>
                <h1 className="text-xl font-bold text-gray-900">BizHeal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => router.push('/')}
                className="text-gray-700 hover:text-blue-600"
              >
                Início
              </button>
              <button 
                onClick={() => router.push('/features')}
                className="text-gray-700 hover:text-blue-600"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => router.push('/pricing')}
                className="text-gray-700 hover:text-blue-600"
              >
                Preços
              </button>
              <button 
                onClick={() => router.push('/login')}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </button>
              <Button 
                onClick={() => router.push('/register')}
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              O Médico Digital<br />da sua Empresa
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Diagnosticamos problemas ocultos no seu negócio e prescrevemos soluções precisas 
              para curar ineficiências e acelerar seu crescimento.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => router.push('/register')}
              >
                Comece seu Diagnóstico Grátis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => router.push('/login')}
              >
                Fazer Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sua Empresa Está Doente?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Muitas empresas sofrem de sintomas silenciosos que drenam recursos e limitam o crescimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receita Estagnada</h3>
              <p className="text-gray-600">Vendas não crescem apesar dos esforços da equipe</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custos Elevados</h3>
              <p className="text-gray-600">Gastos desnecessários consomem a margem de lucro</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Processos Lentos</h3>
              <p className="text-gray-600">Ineficiências operacionais afetam a produtividade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              A Receita para o Sucesso
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Nossa IA analisa seus dados como um médico experiente, identificando problemas 
              e prescrevendo soluções personalizadas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnóstico Preciso</h3>
                <p className="opacity-90">Scanner avançado identifica gargalos ocultos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prescrição Inteligente</h3>
                <p className="opacity-90">Soluções específicas para cada problema encontrado</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Recuperação Contínua</h3>
                <p className="opacity-90">Monitoramento constante garante saúde duradoura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pronto para Curar sua Empresa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a centenas de empresas que já transformaram sua saúde financeira com BizHeal.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => router.push('/register')}
          >
            Iniciar Diagnóstico Gratuito
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Sem compromisso • Resultados em minutos • Totalmente seguro
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