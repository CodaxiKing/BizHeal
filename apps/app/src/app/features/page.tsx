export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Funcionalidades BizHeal
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode diagnosticar e curar os problemas do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Análise de Churn */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <span className="text-2xl">🚨</span>
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
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold ml-3">Diagnóstico Financeiro</h3>
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
                <span className="text-2xl">📁</span>
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
                <span className="text-2xl">📈</span>
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
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold ml-3">Monitoramento 24/7</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Acompanhamento contínuo da saúde do seu negócio com alertas automáticos
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
                <span className="text-2xl">🤖</span>
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
            Começar Diagnóstico Gratuito
          </a>
          <p className="text-gray-500 mt-4">
            Experimente todas as funcionalidades por 14 dias grátis
          </p>
        </div>
      </div>
    </div>
  )
}