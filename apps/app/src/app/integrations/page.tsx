import Navbar from '@/components/Navbar'

export default function Integrations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <span className="text-purple-600 font-medium">Integração Automática</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Conecte seus sistemas<br />em poucos cliques
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Importe dados automaticamente de diversas plataformas como Shopify, 
            sistemas bancários e ERPs existentes.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Sync Automático */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Sync Automático</h3>
            <p className="text-gray-600 text-center mb-6">
              Sincronização automática de dados em tempo real com suas plataformas favoritas sem interrupções no seu fluxo de trabalho.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sincronização em tempo real
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Setup em 1 clique
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monitoramento automático
                </li>
              </ul>
            </div>
          </div>

          {/* Feature placeholder visual */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-purple-700 font-medium">Sync Automático</p>
            </div>
          </div>
          
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Shopify */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.8 7.1c-.4-2.9-2.4-3.8-4.6-3.8-3.3 0-6.1 2.5-6.1 5.8 0 4.1 5.5 4.7 5.5 7.1 0 .9-.8 1.5-2 1.5-1.8 0-2.6-1.1-2.7-2.5l-3.3.4c.4 3.4 3 5.1 6 5.1 3.5 0 5.9-2 5.9-5.1 0-4.4-5.5-4.6-5.5-7.2 0-.9.6-1.6 1.6-1.6 1.2 0 1.8.7 1.9 1.9l3.3-.6z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Shopify</h4>
                <p className="text-sm text-gray-500">E-commerce</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Sincronize automaticamente vendas, produtos e clientes da sua loja Shopify com análises em tempo real.
            </p>
            <button className="w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              Conectar Shopify
            </button>
          </div>

          {/* Bancos */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Bancos</h4>
                <p className="text-sm text-gray-500">Open Banking</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Conecte suas contas bancárias para importação automática de extratos e conciliação financeira.
            </p>
            <button className="w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              Conectar Banco
            </button>
          </div>

          {/* CSV Import */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">CSV</h4>
                <p className="text-sm text-gray-500">Importação</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Faça upload de arquivos CSV com seus dados financeiros para análise rápida e insights imediatos.
            </p>
            <button className="w-full bg-gray-50 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Importar CSV
            </button>
          </div>
        </div>

        {/* Additional Integrations */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Outras integrações disponíveis em breve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'QuickBooks', color: 'bg-blue-100', textColor: 'text-blue-600' },
              { name: 'Stripe', color: 'bg-purple-100', textColor: 'text-purple-600' },
              { name: 'PayPal', color: 'bg-blue-100', textColor: 'text-blue-600' },
              { name: 'Mercado Pago', color: 'bg-blue-100', textColor: 'text-blue-600' },
              { name: 'PagSeguro', color: 'bg-orange-100', textColor: 'text-orange-600' },
              { name: 'Conta Azul', color: 'bg-blue-100', textColor: 'text-blue-600' }
            ].map((integration, index) => (
              <div key={index} className="text-center p-4">
                <div className={`${integration.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <svg className={`w-8 h-8 ${integration.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                <p className="text-xs text-gray-500 mt-1">Em breve</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Process */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Como funciona a integração
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Escolha a Plataforma</h4>
              <p className="text-gray-600 text-sm">
                Selecione qual sistema você quer conectar ao BizHeal
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Autorize a Conexão</h4>
              <p className="text-gray-600 text-sm">
                Faça login na sua conta e autorize o acesso seguro aos dados
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comece a Analisar</h4>
              <p className="text-gray-600 text-sm">
                Seus dados são sincronizados automaticamente e as análises começam imediatamente
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para conectar todos os seus sistemas?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Configure suas integrações em minutos e comece a ter uma visão unificada de todo o seu negócio.
            </p>
            <a
              href="/register"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
            >
              Começar Integrações
            </a>
            <p className="text-purple-200 mt-4 text-sm">
              Setup gratuito • Sincronização segura • Suporte dedicado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}