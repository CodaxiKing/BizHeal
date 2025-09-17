import { Button } from '@bizheal/ui'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              O Médico Digital<br />da sua Empresa
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Diagnosticamos problemas ocultos no seu negócio e prescrevemos soluções precisas 
              para curar ineficiências e acelerar seu crescimento.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                asChild
              >
                <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
                  Comece seu Diagnóstico Grátis
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
              Sua Empresa Está Doente?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Muitas empresas sofrem de sintomas silenciosos que drenam recursos e limitam o crescimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receita Estagnada</h3>
              <p className="text-gray-600">Vendas não crescem apesar dos esforços da equipe</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custos Elevados</h3>
              <p className="text-gray-600">Gastos desnecessários consomem a margem de lucro</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Processos Lentos</h3>
              <p className="text-gray-600">Ineficiências operacionais afetam a produtividade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              A Receita para o Sucesso
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Nossa IA analisa seus dados como um médico experiente, identificando problemas 
              e prescrevendo soluções personalizadas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnóstico Preciso</h3>
                <p className="opacity-90">Scanner avançado identifica gargalos ocultos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prescrição Inteligente</h3>
                <p className="opacity-90">Soluções específicas para cada problema encontrado</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Recuperação Contínua</h3>
                <p className="opacity-90">Monitoramento constante garante saúde duradoura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pronto para Curar sua Empresa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a centenas de empresas que já transformaram sua saúde financeira com BizHeal.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
              Iniciar Diagnóstico Gratuito
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Sem compromisso • Resultados em minutos • Totalmente seguro
          </p>
        </div>
      </section>
    </main>
  )
}