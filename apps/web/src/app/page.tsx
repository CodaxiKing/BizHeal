import { Button } from '@bizheal/ui'

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
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dados Dispersos</h3>
              <p className="text-gray-600">Informações espalhadas em planilhas e sistemas diferentes</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise Manual</h3>
              <p className="text-gray-600">Tempo perdido em relatórios que poderiam ser automatizados</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
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
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integração Automática</h3>
                <p className="opacity-90">Conecte Shopify, Bling, Conta Azul e outras plataformas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise Inteligente</h3>
                <p className="opacity-90">IA identifica padrões e oportunidades de otimização</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dashboards Executivos</h3>
                <p className="opacity-90">Visualizações claras para tomada de decisão estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que Fazem a Diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todas as ferramentas que você precisa para gerir e otimizar seu negócio em uma só plataforma.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">Análise de Receita</h3>
              <p className="text-gray-600 text-sm">Identifique clientes mais lucrativos e oportunidades de crescimento</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Detecção de Churn</h3>
              <p className="text-gray-600 text-sm">Previna a perda de clientes com alertas inteligentes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="text-lg font-semibold mb-2">Relatórios Automatizados</h3>
              <p className="text-gray-600 text-sm">Relatórios executivos gerados automaticamente</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Integrações Nativas</h3>
              <p className="text-gray-600 text-sm">Conecte-se facilmente com seus sistemas atuais</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Segurança Empresarial</h3>
              <p className="text-gray-600 text-sm">Seus dados protegidos com criptografia de ponta</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-lg font-semibold mb-2">Acesso Mobile</h3>
              <p className="text-gray-600 text-sm">Acompanhe seus indicadores de qualquer lugar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Empresas que Confiam no BizHeal
            </h2>
            <p className="text-xl text-gray-600">
              Junte-se a centenas de empresas que já otimizaram seus resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <p className="text-gray-600">Empresas ativas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">R$ 2.5M</div>
              <p className="text-gray-600">Em economia identificada</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">Taxa de satisfação</p>
            </div>
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
    </main>
  )
}