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
                <h1 className="text-xl font-bold text-primary">BizHeal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => router.push('/')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => router.push('/features')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => router.push('/pricing')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => router.push('/login')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Login
              </button>
              <Button 
                onClick={() => router.push('/register')}
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
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Inteligência Empresarial<br />para seu Negócio
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Analisamos dados do seu negócio com IA avançada e oferecemos insights precisos 
              para otimizar processos e acelerar seu crescimento.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => router.push('/register')}
              >
                Comece sua Análise Grátis
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Principais Desafios Empresariais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Identificamos e solucionamos os principais gargalos que limitam o potencial de crescimento da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Receita Estagnada</h3>
              <p className="text-muted-foreground">Falta de insights sobre oportunidades de crescimento</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Custos Elevados</h3>
              <p className="text-muted-foreground">Gastos operacionais sem controle adequado</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Processos Lentos</h3>
              <p className="text-muted-foreground">Falta de automação em processos críticos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossa Metodologia de Análise
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Nossa plataforma de IA analisa seus dados empresariais de forma abrangente, 
              identificando oportunidades e fornecendo recomendações estratégicas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise Avançada</h3>
                <p className="opacity-90">IA identifica padrões e oportunidades nos dados</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Insights Estratégicos</h3>
                <p className="opacity-90">Recomendações personalizadas para seu negócio</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Otimização Contínua</h3>
                <p className="opacity-90">Monitoramento e ajustes para máxima eficiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pronto para Otimizar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a centenas de empresas que já transformaram sua performance com BizHeal.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => router.push('/register')}
          >
            Iniciar Análise Gratuita
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