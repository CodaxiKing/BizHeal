import Navbar from '@/components/Navbar'

export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-green-600 font-medium">Análise Inteligente</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Insights que impulsionam<br />seu crescimento
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa IA analisa seus dados e identifica oportunidades de otimização, 
            ajudando você a tomar decisões mais inteligentes.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Relatórios Inteligentes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Relatórios Inteligentes</h3>
            <p className="text-gray-600 text-center mb-6">
              Relatórios automatizados que identificam padrões, tendências e oportunidades em seus dados financeiros.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Análise de tendências
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Identificação de padrões
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Recomendações automáticas
                </li>
              </ul>
            </div>
          </div>

          {/* Feature placeholder visual */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-green-700 font-medium">Relatórios Inteligentes</p>
            </div>
          </div>
          
        </div>

        {/* Features Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Análise de Churn */}
          <div className="text-center p-6">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Análise de Churn</h4>
            <p className="text-gray-600 text-sm">
              Identifica clientes em risco de cancelamento com alertas preventivos e estratégias de retenção.
            </p>
          </div>

          {/* Previsões */}
          <div className="text-center p-6">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Previsões</h4>
            <p className="text-gray-600 text-sm">
              Projeções de receita, despesas e fluxo de caixa baseadas em dados históricos e tendências.
            </p>
          </div>

          {/* Relatórios */}
          <div className="text-center p-6">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Relatórios</h4>
            <p className="text-gray-600 text-sm">
              Relatórios detalhados e personalizáveis com visualizações interativas e exportação.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Como nossos insights transformam seu negócio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Decisões Baseadas em Dados</h4>
                <p className="text-gray-600 text-sm">
                  Pare de confiar apenas na intuição. Nossos relatórios fornecem dados concretos para suas decisões estratégicas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Antecipação de Problemas</h4>
                <p className="text-gray-600 text-sm">
                  Identifique riscos antes que se tornem crises. Receba alertas sobre clientes em risco e tendências negativas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Identificação de Oportunidades</h4>
                <p className="text-gray-600 text-sm">
                  Descubra novos mercados, produtos rentáveis e períodos de maior demanda através de análises avançadas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Otimização Contínua</h4>
                <p className="text-gray-600 text-sm">
                  Monitore KPIs em tempo real e receba sugestões automáticas para melhorar a performance do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para descobrir insights que vão revolucionar seu negócio?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Comece hoje mesmo a analisar seus dados com inteligência artificial e tome decisões mais assertivas.
            </p>
            <a
              href="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
            >
              Descobrir Insights Agora
            </a>
            <p className="text-green-200 mt-4 text-sm">
              Análise gratuita • Relatórios automáticos • IA avançada
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}