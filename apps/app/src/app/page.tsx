'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@bizheal/ui'
import Navbar from '@/components/Navbar'

// Interactive How It Works Component
function InteractiveHowItWorks({ router }: { router: any }) {
  const [activeStep, setActiveStep] = useState(1)
  
  const steps = [
    {
      id: 1,
      title: "Conecte seus dados",
      description: "Integre suas ferramentas (Shopify, Bling, Conta Azul, planilhas) em minutos. Nossa IA coleta e organiza tudo automaticamente.",
      detailedDescription: "Conecte mais de 50+ plataformas populares com apenas alguns cliques. Suportamos Shopify, WooCommerce, Bling, Conta Azul, planilhas Excel/Google Sheets e muito mais.",
      color: "blue",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Receba diagnósticos automáticos",
      description: "Em 24h nossa IA identifica onde você está perdendo dinheiro: clientes em risco, desperdícios ocultos, oportunidades não exploradas.",
      detailedDescription: "Nossa inteligência artificial analisa padrões nos seus dados e identifica automaticamente gargalos financeiros, clientes com risco de churn e oportunidades de crescimento que você talvez não tenha notado.",
      color: "green",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Aja com recomendações inteligentes",
      description: "Receba planos de ação específicos e priorizados. Implemente melhorias que geram resultados reais em semanas.",
      detailedDescription: "Receba recomendações personalizadas e priorizadas baseadas no seu perfil de negócio. Cada sugestão vem com passos claros de implementação e estimativas de impacto financeiro.",
      color: "purple",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', bgLight: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', bgLight: 'bg-green-50', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', bgLight: 'bg-purple-50', border: 'border-purple-200' }
  }

  const activeStepData = steps.find(step => step.id === activeStep)!

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            3 passos simples para revolucionar a gestão da sua empresa
          </p>
        </div>
        
        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  activeStep === step.id
                    ? `${colorClasses[step.color as keyof typeof colorClasses].bg} ${colorClasses[step.color as keyof typeof colorClasses].text} scale-110 shadow-lg`
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="text-center">
            <div className={`${colorClasses[activeStepData.color as keyof typeof colorClasses].bgLight} p-8 rounded-2xl transition-all duration-500 transform hover:scale-105`}>
              <div className={`w-24 h-24 ${colorClasses[activeStepData.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className={colorClasses[activeStepData.color as keyof typeof colorClasses].text}>
                  {activeStepData.icon}
                </div>
              </div>
              <div className={`text-6xl font-bold ${colorClasses[activeStepData.color as keyof typeof colorClasses].text} mb-4`}>
                {activeStepData.id}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {activeStepData.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {activeStepData.detailedDescription}
            </p>
            
            {/* Step Indicators */}
            <div className="flex space-x-2 mb-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step.id <= activeStep ? colorClasses[activeStepData.color as keyof typeof colorClasses].bg : 'bg-gray-200'
                  } ${step.id === activeStep ? 'w-8' : 'w-4'}`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={`${colorClasses[activeStepData.color as keyof typeof colorClasses].bg} ${colorClasses[activeStepData.color as keyof typeof colorClasses].text} hover:opacity-80 border-2 ${colorClasses[activeStepData.color as keyof typeof colorClasses].border}`}
                onClick={() => router.push('/integrations')}
              >
                {activeStep === 1 ? 'Ver Integrações' : activeStep === 2 ? 'Ver Análises' : 'Ver Recomendações'}
              </Button>
              {activeStep < 3 && (
                <Button 
                  variant="outline"
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Próximo Passo →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Interactive Target Audience Component  
function InteractiveTargetAudience({ router }: { router: any }) {
  const [selectedAudience, setSelectedAudience] = useState<number | null>(null)
  
  const audiences = [
    {
      id: 1,
      title: "Donos de E-commerce",
      description: "Identifique produtos que não vendem, clientes em risco de churn, e otimize campanhas de marketing para maximizar o ROI.",
      detailedDescription: "Especialistas em vendas online que precisam de visibilidade total sobre performance de produtos, comportamento de clientes e eficácia das campanhas de marketing.",
      benefits: [
        "Análise de performance de produtos em tempo real",
        "Detecção precoce de churn de clientes",
        "Otimização automática de campanhas de ads",
        "Relatórios de ROI detalhados por canal"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "blue",
      cta: "Ver Demo para E-commerce"
    },
    {
      id: 2,
      title: "Agências de Marketing",
      description: "Entregue relatórios mais inteligentes para clientes e prove o valor real das suas campanhas com métricas que importam.",
      detailedDescription: "Agências que precisam demonstrar resultados concretos para seus clientes e otimizar campanhas baseadas em dados reais de negócio.",
      benefits: [
        "Dashboards white-label personalizados",
        "Relatórios automáticos para clientes", 
        "Métricas de ROI real, não apenas cliques",
        "Integração com todas as principais plataformas"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "green", 
      cta: "Ver Demo para Agências"
    },
    {
      id: 3,
      title: "PMEs em Crescimento",
      description: "Empresas que precisam profissionalizar a gestão e tomar decisões estratégicas baseadas em dados confiáveis.",
      detailedDescription: "Pequenas e médias empresas em fase de crescimento que precisam de ferramentas profissionais de gestão financeira e análise de dados.",
      benefits: [
        "Controle financeiro automatizado completo",
        "Indicadores de performance personalizados",
        "Planejamento estratégico baseado em dados",
        "Suporte especializado para implementação"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "purple",
      cta: "Ver Demo para PMEs"
    }
  ]

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', bgLight: 'bg-blue-50', button: 'bg-blue-600 hover:bg-blue-700' },
    green: { bg: 'bg-green-100', text: 'text-green-600', bgLight: 'bg-green-50', button: 'bg-green-600 hover:bg-green-700' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', bgLight: 'bg-purple-50', button: 'bg-purple-600 hover:bg-purple-700' }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Para Quem é o BizHeal?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresários que querem tomar decisões baseadas em dados, não em suposições
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.id}
              className={`bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer ${
                selectedAudience === audience.id 
                  ? 'transform scale-105 shadow-2xl border-2 border-blue-200' 
                  : 'hover:transform hover:scale-102 hover:shadow-xl'
              }`}
              onClick={() => setSelectedAudience(selectedAudience === audience.id ? null : audience.id)}
            >
              {/* Card Header */}
              <div className="p-8">
                <div className={`${colorClasses[audience.color as keyof typeof colorClasses].bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={colorClasses[audience.color as keyof typeof colorClasses].text}>
                    {audience.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">{audience.title}</h3>
                <p className="text-gray-600 text-center mb-6">
                  {selectedAudience === audience.id ? audience.detailedDescription : audience.description}
                </p>
                
                {/* Benefits List - Only show when expanded */}
                {selectedAudience === audience.id && (
                  <div className="space-y-3 mb-6">
                    {audience.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colorClasses[audience.color as keyof typeof colorClasses].bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button - Only show when expanded */}
                {selectedAudience === audience.id && (
                  <div className="text-center">
                    <Button 
                      className={`w-full ${colorClasses[audience.color as keyof typeof colorClasses].button} text-white`}
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push('/register')
                      }}
                    >
                      {audience.cta}
                    </Button>
                  </div>
                )}
              </div>

              {/* Expand/Collapse Indicator */}
              <div className="px-8 pb-6 text-center">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  {selectedAudience === audience.id ? (
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
                  Sua empresa está<br />
                  <span className="text-cyan-300">perdendo dinheiro?</span><br />
                  Descubra onde.
                </h2>
                
                <p className="text-lg text-blue-100 mb-8 max-w-md">
                  BizHeal é a plataforma de inteligência que diagnostica ineficiências ocultas 
                  e automatiza ações para aumentar seu lucro.
                </p>
                
                <div>
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-100 text-blue-700 text-lg px-8 py-4 font-semibold rounded-full shadow-lg"
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
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section - Inspired by Conta Azul */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-white text-sm font-medium">+ de 100 mil relatórios gerados</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Deixe a gente <span className="text-cyan-300">trabalhar por você!</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Não precisa se preocupar com responsabilidades. Nossa plataforma cuida de tudo 
              para que você possa focar no crescimento do seu negócio.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-blue-700 text-lg px-8 py-4 font-semibold rounded-full mb-16 shadow-lg"
              onClick={() => router.push('/register')}
            >
              Teste Grátis
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Receita Mensal</div>
                  <div className="text-2xl font-bold text-green-600">R$ 125.890,00</div>
                  <div className="text-xs text-green-500">↗ +23% vs mês anterior</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Despesas</div>
                  <div className="text-2xl font-bold text-orange-600">R$ 48.450,00</div>
                  <div className="text-xs text-red-500">↗ +5% vs mês anterior</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Lucro Líquido</div>
                  <div className="text-2xl font-bold text-blue-600">R$ 77.440,00</div>
                  <div className="text-xs text-green-500">↗ +35% vs mês anterior</div>
                </div>
              </div>
              
              {/* Simulated Chart */}
              <div className="bg-gray-50 rounded-lg p-4 h-32">
                <div className="text-sm text-gray-500 mb-4">Fluxo de Caixa - Últimos 6 meses</div>
                <svg className="w-full h-16" viewBox="0 0 300 60">
                  <polyline
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    points="0,50 50,45 100,35 150,30 200,20 250,15 300,10"
                  />
                  <circle cx="300" cy="10" r="4" fill="#3B82F6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-300 mb-2">+ de 25.000</div>
              <div className="text-lg font-medium text-white mb-2">Empresas</div>
              <div className="text-blue-100 text-sm">confiam na gestão financeira com o BizHeal</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-300 mb-2">+ de 5.000.000</div>
              <div className="text-lg font-medium text-white mb-2">Transações</div>
              <div className="text-blue-100 text-sm">processadas em nossa plataforma todos os meses</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-300 mb-2">40h por mês</div>
              <div className="text-lg font-medium text-white mb-2">De economia</div>
              <div className="text-blue-100 text-sm">média para quem confia nas automações do BizHeal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section - Interactive */}
      <InteractiveHowItWorks router={router} />

      {/* Para Quem é Section - Interactive */}
      <InteractiveTargetAudience router={router} />

      {/* Prova Social Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empresários que já transformaram seus negócios com o BizHeal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">RC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Ricardo Costa</h4>
                  <p className="text-sm text-gray-600">CEO, Loja Digital Plus</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Em 3 meses, identifiquei R$ 45 mil em desperdícios que não sabia que tinha. 
                O BizHeal pagou por si só no primeiro mês."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">MS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Marina Silva</h4>
                  <p className="text-sm text-gray-600">Diretora, Agência Crescer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Meus clientes ficaram impressionados com os relatórios automáticos. 
                Consegui aumentar o valor dos contratos em 40%."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">JO</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">João Oliveira</h4>
                  <p className="text-sm text-gray-600">Fundador, Tech Solutions</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Finalmente tenho uma visão clara do meu negócio. As integrações funcionaram 
                perfeitamente e economizo 10 horas por semana em relatórios."
              </p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tá com dúvida? <span className="text-blue-600">A gente explica.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">O que é gestão financeira inteligente e como funciona?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                A gestão financeira inteligente é um sistema que utiliza IA e automação para analisar seus dados financeiros, 
                identificar padrões e fornecer insights práticos para otimizar a saúde financeira do seu negócio.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais segmentos podem ser atendidos pela plataforma BizHeal?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                O BizHeal atende diversos segmentos: e-commerce, varejo, prestação de serviços, consultorias, 
                agências, restaurantes, clínicas e qualquer negócio que precise de controle financeiro eficiente.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais são as principais funcionalidades do BizHeal?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Controle de fluxo de caixa, análise de churn, previsões financeiras, relatórios inteligentes, 
                dashboard personalizado, integração com sistemas externos e insights automáticos de IA.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Como funcionam as integrações do BizHeal?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                O BizHeal se conecta automaticamente com Shopify, sistemas bancários, ERPs e planilhas CSV. 
                Os dados são sincronizados em tempo real para análises sempre atualizadas.
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais são as vantagens e benefícios de usar o BizHeal?</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Economia de até 40h mensais, decisões baseadas em dados reais, redução de erros manuais, 
                previsibilidade financeira, identificação de oportunidades e controle total do seu negócio.
              </div>
            </details>
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
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* BizHeal */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">BizHeal</h3>
                <ul className="space-y-3">
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Sobre</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="/pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Gestão Financeira</a></li>
                  <li><a href="/register" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Tire dúvidas</a></li>
                  <li><a href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Programa de Afiliados</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Parceiros e Integrações</a></li>
                  <li><a href="/settings" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Carreira</a></li>
                </ul>
              </div>

              {/* Funcionalidades */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Funcionalidades</h3>
                <ul className="space-y-3">
                  <li><a href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Gestão de Vendas e Clientes</a></li>
                  <li><a href="/dashboard/import" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Fluxo de Caixa Futuro</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Controle de Estoque</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Controle de Comissões</a></li>
                  <li><a href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Emissão de Nota Fiscal</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Relatórios e BI</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Gestão Financeira</a></li>
                  <li><a href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Gestão de Contratos</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Controle com contador</a></li>
                </ul>
              </div>

              {/* Soluções */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Soluções</h3>
                <ul className="space-y-3">
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Barbearias</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Clínicas</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Consultórios</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Escritórios</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Prestadores</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Academias</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Tecnologia</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Marketing</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Comércio Atacadista</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Confecções</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">CRM Empresas</a></li>
                </ul>
              </div>

              {/* Aprenda */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Aprenda</h3>
                <ul className="space-y-3">
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Manual Fiscal</a></li>
                  <li><a href="/pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Gestão Empresarial</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Segurança</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Empreendedorismo</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Certificado de Segurança</a></li>
                  <li><a href="/pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Central de Ajuda</a></li>
                  <li><a href="/features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Integração</a></li>
                  <li><a href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Implementações</a></li>
                </ul>
              </div>

              {/* BizHeal Mais */}
              <div className="col-span-1">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">BizHeal Mais</h3>
                <ul className="space-y-3">
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Instagram</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">YouTube</a></li>
                  <li><a href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">WhatsApp</a></li>
                </ul>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Certificados</h4>
                  <div className="flex space-x-2">
                    <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">SSL</span>
                    </div>
                    <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">ISO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Canais de Atendimento */}
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Canais de atendimento</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Antes de ser cliente</h4>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="text-sm text-blue-600">(11) 99999-9999</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Já sou cliente</h4>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="text-sm text-blue-600">(11) 88888-8888</p>
                  <p className="text-sm text-gray-500 mt-1">Segunda a Sexta das 8h às 18h</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Exclusivo para Serviços Financeiros</h4>
                  <p className="text-sm text-gray-600">Consulte</p>
                  <p className="text-sm text-blue-600">(11) 77777-7777</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento Especializado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 bg-white">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-500">
                  © 2024 BizHeal S.A. - São Paulo, SP - 01.234.567/0001-89 - bizheal.com.br
                </div>
                <div className="flex space-x-6 text-sm text-gray-500">
                  <a href="/privacy" className="hover:text-blue-600 transition-colors">Política de Privacidade</a>
                  <a href="/terms" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
                  <a href="/cookies" className="hover:text-blue-600 transition-colors">Política de Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}