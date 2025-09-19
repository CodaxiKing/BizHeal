import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

export default function Pricing() {
  return (
    <main className="flex-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o porte e necessidades da sua empresa. 
            Todos os planos incluem suporte especializado e garantia de satisfação.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Básico Plan */}
          <Card className="relative">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 12l4-4 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"/>
                </svg>
              </div>
              <CardTitle className="text-2xl mb-2">Básico</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mb-2">Gratuito</div>
              <p className="text-gray-600">Para começar a análise</p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Scanner básico de gargalos
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  1 relatório completo por mês
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Dashboard básico
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Suporte via email
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-xs mr-3">—</span>
                  <span className="text-gray-400">Integrações avançadas</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-xs mr-3">—</span>
                  <span className="text-gray-400">Alertas em tempo real</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
                  Começar Grátis
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-2 border-blue-500 shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                Mais Popular
              </span>
            </div>
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <CardTitle className="text-2xl mb-2">Pro</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mb-2">R$ 197<span className="text-lg text-gray-500">/mês</span></div>
              <p className="text-gray-600">Para empresas em crescimento</p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Relatórios ilimitados
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Integrações com 50+ sistemas
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Alertas inteligentes em tempo real
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Dashboard avançado personalizado
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  API para integrações customizadas
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Suporte prioritário
                </li>
              </ul>
              <Button 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://app.bizheal.com/checkout?plan=pro" target="_blank" rel="noopener noreferrer">
                  Começar Teste de 14 Dias
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mb-2">R$ 497<span className="text-lg text-gray-500">/mês</span></div>
              <p className="text-gray-600">Para grandes organizações</p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  IA Preditiva avançada
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Workflows automatizados
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Consultoria estratégica mensal
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  Suporte dedicado 24/7
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  White-label disponível
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  SLA garantido de 99,9%
                </li>
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://app.bizheal.com/checkout?plan=enterprise" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Posso cancelar minha assinatura a qualquer momento?
              </h3>
              <p className="text-gray-600">
                Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. 
                Você continuará tendo acesso até o final do período pago.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Como funciona o período de teste gratuito?
              </h3>
              <p className="text-gray-600">
                O plano Pro inclui 14 dias de teste gratuito. Você terá acesso completo a todas as funcionalidades 
                sem compromisso. Não cobramos nada durante o período de teste.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Meus dados estão seguros?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Utilizamos criptografia de ponta e seguimos as melhores práticas de segurança. 
                Somos compliance com LGPD e outras regulamentações de privacidade.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Posso mudar de plano depois?
              </h3>
              <p className="text-gray-600">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                As mudanças são aplicadas imediatamente e ajustamos a cobrança proporcionalmente.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Transformar sua Empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Milhares de empresas já escolheram BizHeal. 
            Junte-se a eles e descubra o poder da inteligência artificial aplicada ao seu negócio.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="https://app.bizheal.com/register" target="_blank" rel="noopener noreferrer">
              Começar Agora - É Grátis
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}