import Navbar from '@/components/Navbar'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar a performance do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plano Starter */}
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 97</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfeito para pequenas empresas que querem começar a análise
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Até 1.000 transações/mês</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Scanner de churn básico</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Relatórios mensais</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Suporte via email</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">14 dias grátis</span>
              </li>
            </ul>
            
            <a
              href="/register"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-gray-800 transition-colors block"
            >
              Começar Grátis
            </a>
          </div>

          {/* Plano Professional */}
          <div className="bg-white rounded-lg shadow-md p-8 relative border-2 border-blue-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Mais Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 297</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal para empresas em crescimento que precisam de análises avançadas
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Até 10.000 transações/mês</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Scanner de churn avançado</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Relatórios semanais</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">IA prescritiva</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Alertas em tempo real</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Suporte prioritário</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">14 dias grátis</span>
              </li>
            </ul>
            
            <a
              href="/register"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-blue-700 transition-colors block"
            >
              Começar Grátis
            </a>
          </div>

          {/* Plano Enterprise */}
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 897</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">
                Para grandes empresas que precisam do máximo em análise e recomendações estratégicas
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Transações ilimitadas</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Todos os recursos avançados</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Relatórios customizados</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Integrações personalizadas</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Gerente de sucesso dedicado</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Suporte 24/7</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">30 dias grátis</span>
              </li>
            </ul>
            
            <a
              href="/register"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-gray-800 transition-colors block"
            >
              Falar com Vendas
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Garantia de Satisfação
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não ficou satisfeito? Devolvemos 100% do seu investimento nos primeiros 30 dias. 
            Sem perguntas, sem burocracia.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Precisa de algo personalizado?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco para criar um plano sob medida para sua empresa.
          </p>
          <a
            href="mailto:vendas@bizheal.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  )
}