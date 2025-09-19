import { Button } from '@bizheal/ui'
import FeatureTabs from './components/FeatureTabs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Inteligência Empresarial<br />que Transforma Negócios
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plataforma completa de análise de dados que identifica oportunidades de crescimento 
              e otimiza a performance da sua empresa com inteligência artificial.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                asChild
              >
                <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
                  Teste Grátis por 7 Dias
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                Ver Demonstração
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

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Deixe a gente trabalhar por você!
            </h2>
            <p className="text-xl text-gray-600">
              Milhares de empresas já economizam tempo e dinheiro conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">300.000</div>
              <p className="text-gray-600 text-lg">Pessoas cadastradas</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">10.000.000</div>
              <p className="text-gray-600 text-lg">De dados processados mensalmente pelos nossos sistemas</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">30h</div>
              <p className="text-gray-600 text-lg">Por mês economizadas em média pelos nossos usuários</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-4">
              Muito parceria, <span className="font-semibold text-blue-600">mais histórias pra contar!</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rapha Sales */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapha Sales</h3>
              <p className="text-blue-600 mb-4">Sou YouTuber</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comecei a Monetizar no digital em 2018 e meu maior resultado com afiliado foi mais de 150 mil num mês!
              </p>
              <div className="mt-6">
                <span className="text-blue-600 text-sm font-medium">⭐ APROVADO</span>
              </div>
            </div>

            {/* Gustavo Sales */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gustavo Sales</h3>
              <p className="text-blue-600 mb-4">Mentor e Streamer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transformado em pessoa e no mundo dos negócios: de técnico em contabilidade para ser um empreendedor
              </p>
              <div className="mt-6">
                <span className="text-blue-600 text-sm font-medium">⭐ APROVADO</span>
              </div>
            </div>

            {/* Jennifer Gomes */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jennifer Gomes</h3>
              <p className="text-blue-600 mb-4">Empreendedora Associada</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tenho experiências únicas, entre elas ser associada ao empreendimento da empresa e configurar como
              </p>
              <div className="mt-6">
                <span className="text-blue-600 text-sm font-medium">⭐ APROVADO</span>
              </div>
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