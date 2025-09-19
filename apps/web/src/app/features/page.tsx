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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.93 4.93l1.41 1.41m0 0L12 12.01l5.66-5.66m0 0l1.41-1.41M16 12.01L12.01 16m0 0L6.34 21.66m0 0l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-red-600"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <CardTitle className="text-2xl">Scanner de Saúde do Negócio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Não apenas veja gráficos. Encontre exatamente onde seus processos estão falhando 
                e quanto isso está custando ao seu negócio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Identifique clientes em risco de churn</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Monitore a concentração de receita</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Encontre custos desnecessários</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"/>
                </svg>
              </div>
              <CardTitle className="text-2xl">Integrações Inteligentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Conecte todos seus sistemas em minutos. Nossa IA unifica dados de diferentes fontes 
                para criar uma visão 360° do seu negócio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Conecte Shopify, Bling, Conta Azul automaticamente</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Importe planilhas e dados históricos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Sincronização em tempo real</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"/>
                </svg>
              </div>
              <CardTitle className="text-2xl">Automação de Ações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Pare de reagir aos problemas. Nossa plataforma executa ações preventivas automaticamente, 
                como um assistente que cuida do seu negócio 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Campanhas de retenção automáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Ajustes de preços inteligentes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Alertas preditivos de riscos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-600"/>
                </svg>
              </div>
              <CardTitle className="text-2xl">Inteligência de Anúncios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Chega de queimar dinheiro em ads que não convertem. Nossa IA otimiza campanhas 
                automaticamente e encontra oportunidades que você não vê.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Análise de ROI por canal em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Otimização automática de orçamentos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Descoberta de novos públicos lucrativos</span>
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
                  Visualize a performance da sua empresa em tempo real com métricas personalizadas 
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
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
            Comece sua análise gratuita hoje mesmo.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
              Iniciar Análise Grátis
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}