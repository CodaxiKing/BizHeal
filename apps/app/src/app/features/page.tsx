import Navbar from '@/components/Navbar'

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Funcionalidades BizHeal
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode identificar e resolver os desafios operacionais do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Análise de Churn */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">Scanner de Churn</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Identifica clientes em risco de cancelamento antes que seja tarde demais
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Análise preditiva avançada</li>
              <li>• Alertas em tempo real</li>
              <li>• Estratégias de retenção</li>
            </ul>
          </div>

          {/* Análise Financeira */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">Análise Financeira</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Analisa receitas, custos e identifica oportunidades de otimização
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Análise de margem</li>
              <li>• Tendências de receita</li>
              <li>• Otimização de custos</li>
            </ul>
          </div>

          {/* Importação de Dados */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">Importação Simples</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Conecte seus dados rapidamente através de CSV ou integrações
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Upload de CSV</li>
              <li>• Validação automática</li>
              <li>• Processamento seguro</li>
            </ul>
          </div>

          {/* Relatórios Inteligentes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">Relatórios Inteligentes</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Dashboards visuais com insights acionáveis para tomada de decisão
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Visualizações interativas</li>
              <li>• Insights automatizados</li>
              <li>• Exportação de dados</li>
            </ul>
          </div>

          {/* Monitoramento Contínuo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">Monitoramento 24/7</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Acompanhamento contínuo da performance do seu negócio com alertas automáticos
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Alertas personalizados</li>
              <li>• Notificações via email</li>
              <li>• Atualizações em tempo real</li>
            </ul>
          </div>

          {/* IA Prescritiva */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-3">IA Prescritiva</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Recomendações específicas baseadas em machine learning avançado
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Sugestões personalizadas</li>
              <li>• Aprendizado contínuo</li>
              <li>• Planos de ação detalhados</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Começar Análise Gratuita
          </a>
          <p className="text-gray-500 mt-4">
            Experimente todas as funcionalidades por 14 dias grátis
          </p>
        </div>
      </div>
    </div>
  )
}