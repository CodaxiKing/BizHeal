import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

export default function Features() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Funcionalidades Poderosas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o BizHeal transforma dados complexos em insights acionáveis 
            para acelerar o crescimento da sua empresa.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <CardTitle className="text-2xl">Scanner de Gargalos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Nossa IA examina todos os processos da sua empresa, identificando gargalos 
                ocultos que estão limitando seu crescimento.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Análise de fluxo de trabalho
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Detecção de ineficiências
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Mapeamento de dependências
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Relatórios visuais detalhados
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <CardTitle className="text-2xl">Prescrição Automática</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Para cada problema identificado, geramos soluções específicas e 
                personalizadas, como um médico prescrevendo o tratamento ideal.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Soluções personalizadas
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Planos de ação detalhados
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Priorização inteligente
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  ROI projetado
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <CardTitle className="text-2xl">Cicatrização Contínua</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Monitoramento contínuo garante que as melhorias implementadas sejam 
                sustentáveis e que novos problemas sejam detectados rapidamente.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Monitoramento em tempo real
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Alertas proativos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Relatórios de progresso
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Otimização contínua
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            E Muito Mais...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dashboard Inteligente</h3>
                <p className="text-gray-600">
                  Visualize a saúde da sua empresa em tempo real com métricas personalizadas 
                  e insights acionáveis em um painel intuitivo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg">🔗</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrações Nativas</h3>
                <p className="text-gray-600">
                  Conecte facilmente com seus sistemas existentes através de APIs seguras 
                  e integrações pré-construídas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg">🚨</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Alertas Inteligentes</h3>
                <p className="text-gray-600">
                  Receba notificações proativas sobre anomalias e oportunidades de melhoria 
                  antes que se tornem problemas críticos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-lg">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Segurança Enterprise</h3>
                <p className="text-gray-600">
                  Seus dados são protegidos com criptografia de ponta e compliance 
                  com as principais regulamentações de privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para Experimentar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Veja como essas funcionalidades podem transformar sua empresa. 
            Comece seu diagnóstico gratuito hoje mesmo.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
              Iniciar Diagnóstico Grátis
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}