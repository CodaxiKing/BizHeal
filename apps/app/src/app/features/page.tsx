import Navbar from '@/components/Navbar'

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-blue-600 font-medium">Gestão Financeira</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Controle total do seu<br />fluxo de caixa
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Acompanhe receitas, despesas e fluxo de caixa em tempo real. 
            Tenha visão completa da saúde financeira do seu negócio.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Dashboard Financeiro */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Dashboard Financeiro</h3>
            <p className="text-gray-600 text-center mb-6">
              Visão completa e em tempo real da saúde financeira do seu negócio com gráficos intuitivos e métricas essenciais.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Visão geral financeira
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gráficos interativos
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Métricas em tempo real
                </li>
              </ul>
            </div>
          </div>

          {/* Feature placeholder visual */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-blue-700 font-medium">Dashboard Financeiro</p>
            </div>
          </div>
          
        </div>

        {/* Features Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Fluxo de Caixa */}
          <div className="text-center p-6">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fluxo de Caixa</h4>
            <p className="text-gray-600 text-sm">
              Controle completo das entradas e saídas com projeções e análises de tendências.
            </p>
          </div>

          {/* Contas a Pagar */}
          <div className="text-center p-6">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Contas a Pagar</h4>
            <p className="text-gray-600 text-sm">
              Gestão completa de fornecedores e despesas com alertas de vencimento.
            </p>
          </div>

          {/* Contas a Receber */}
          <div className="text-center p-6">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Contas a Receber</h4>
            <p className="text-gray-600 text-sm">
              Acompanhe vendas e recebimentos com gestão de inadimplência.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ter controle total das suas finanças?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experimente o BizHeal gratuitamente e descubra como nossa plataforma pode transformar sua gestão financeira.
            </p>
            <a
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Teste Grátis por 14 Dias
            </a>
            <p className="text-blue-200 mt-4 text-sm">
              Sem compromisso • Setup em minutos • Suporte especializado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}