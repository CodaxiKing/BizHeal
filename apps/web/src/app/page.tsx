import Link from 'next/link'
import { Button } from '@bizheal/ui'
import FeatureTabs from './components/FeatureTabs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Controle financeiro inteligente para seu negócio
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Organize seu financeiro. Controle total da operação.
              </p>
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold text-lg px-8 py-4"
                asChild
              >
                <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
                  Teste Grátis
                </a>
              </Button>
            </div>
            <div className="relative">
              {/* Financial Dashboard Visual Elements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Fluxo de caixa diário</span>
                    <span className="text-green-600 text-sm font-medium">+15.2%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">R$ 45.890,00</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Receita Mensal</span>
                    <span className="text-green-600 text-sm font-medium">+8.4%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">R$ 18.450,00</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Despesas</span>
                    <span className="text-blue-600 text-sm font-medium">Controlado</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">R$ 8.230,00</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Lucro Líquido</span>
                    <span className="text-green-600 text-sm font-medium">+12.7%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">R$ 27.440,00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-600">1</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <h3 className="text-xl font-semibold mb-3">Conecte seus dados</h3>
                <p className="text-gray-600">
                  Integre suas ferramentas (Shopify, Bling, Conta Azul, planilhas) em minutos. 
                  Nossa IA coleta e organiza tudo automaticamente.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-green-600">2</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-3">Receba diagnósticos automáticos</h3>
                <p className="text-gray-600">
                  Em 24h nossa IA identifica onde você está perdendo dinheiro: 
                  clientes em risco, desperdícios ocultos, oportunidades não exploradas.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-purple-600">3</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold mb-3">Aja com recomendações inteligentes</h3>
                <p className="text-gray-600">
                  Receba planos de ação específicos e priorizados. 
                  Implemente melhorias que geram resultados reais em semanas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Donos de E-commerce</h3>
              <p className="text-gray-600 text-center mb-6">
                Identifique produtos que não vendem, clientes em risco de churn, 
                e otimize campanhas de marketing para maximizar o ROI.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Análise de performance de produtos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Otimização de campanhas de ads
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Prevenção de churn de clientes
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Agências de Marketing</h3>
              <p className="text-gray-600 text-center mb-6">
                Entregue relatórios mais inteligentes para clientes e prove o valor real 
                das suas campanhas com métricas que importam.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Dashboards white-label para clientes
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  ROI real das campanhas
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Relatórios automatizados
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">PMEs em Crescimento</h3>
              <p className="text-gray-600 text-center mb-6">
                Empresas que precisam profissionalizar a gestão e tomar decisões 
                estratégicas baseadas em dados confiáveis.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Controle financeiro automatizado
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Indicadores de performance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Planejamento estratégico
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      {/* Problem Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Desafios que Limitam o Crescimento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empresas perdem oportunidades valiosas por falta de visibilidade sobre seus dados financeiros e operacionais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h4v7H3v-7zm6-8h4v15H9V5zm6 5h4v10h-4v-10z" stroke="currentColor" strokeWidth="2" fill="currentColor" className="text-blue-600"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dados Dispersos</h3>
              <p className="text-gray-600">Informações espalhadas em planilhas e sistemas diferentes</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-orange-600"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise Manual</h3>
              <p className="text-gray-600">Tempo perdido em relatórios que poderiam ser automatizados</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor" className="text-red-600"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Decisões Reativas</h3>
              <p className="text-gray-600">Falta de insights preditivos para antecipar problemas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tecnologia que Impulsiona Resultados
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Nossa plataforma integra todos os seus dados empresariais e utiliza IA para 
              entregar insights estratégicos em tempo real.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.5 0 4.8 1 6.4 2.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M21 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integração Automática</h3>
                <p className="opacity-90">Conecte Shopify, Bling, Conta Azul e outras plataformas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise Inteligente</h3>
                <p className="opacity-90">IA identifica padrões e oportunidades de otimização</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 12l4-4 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dashboards Executivos</h3>
                <p className="opacity-90">Visualizações claras para tomada de decisão estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Tabs */}
      <FeatureTabs />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pronto para Descobrir Onde Sua Empresa Está Perdendo Dinheiro?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo com nosso diagnóstico gratuito e veja resultados em 24 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">Iniciar Diagnóstico Gratuito</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <Link href="/features">Conhecer Todas as Funcionalidades</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">🇧🇷</div>
              <div className="text-gray-700">Focado no mercado brasileiro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">⚡</div>
              <div className="text-gray-700">Integração rápida e simples</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">🤖</div>
              <div className="text-gray-700">Inteligência artificial avançada</div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tá com dúvida? <span className="text-blue-600">A gente explica.</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg border border-gray-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">O que é um ERP e como ele funciona?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                Um ERP (Enterprise Resource Planning) é um sistema que integra e automatiza os principais processos de negócio de uma empresa, como finanças, vendas, compras, estoque e recursos humanos, centralizando informações em uma única plataforma.
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais segmentos podem ser atendidos por um ERP?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                Praticamente todos os segmentos podem ser beneficiados por um ERP: comércio, indústria, serviços, agronegócio, saúde, educação, construção civil, entre outros. O sistema se adapta às necessidades específicas de cada setor.
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais são as principais funcionalidades de um ERP?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                As principais funcionalidades incluem gestão financeira, controle de estoque, emissão de notas fiscais, gestão de vendas e compras, relatórios gerenciais, controle de fluxo de caixa e integração bancária.
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Como funcionam as integrações da Conta Azul?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                A Conta Azul oferece integrações nativas com mais de 200 aplicações, incluindo e-commerces, marketplaces, sistemas de pagamento, bancos e ferramentas de produtividade, sincronizando dados automaticamente.
              </div>
            </details>

            <details className="bg-white rounded-lg border border-gray-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">Quais são as vantagens e benefícios de usar a Conta Azul?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                Os principais benefícios incluem automatização de processos, redução de erros, economia de tempo, maior controle financeiro, facilidade de uso, acesso remoto e suporte especializado.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transforme Dados em Crescimento
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Comece hoje a otimizar seus resultados com inteligência empresarial avançada.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
              Começar Teste Gratuito
            </a>
          </Button>
          <p className="text-sm opacity-75 mt-4">
            Sem cartão de crédito • Suporte completo • Resultados em 24h
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}