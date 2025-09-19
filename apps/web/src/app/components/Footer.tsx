export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Conta Azul */}
          <div>
            <h3 className="text-blue-600 font-semibold text-lg mb-4">Conta Azul</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sala de imprensa</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Código de Conduta</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Canal de Ética</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Política de privacidade</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Baixe nosso APPS</h4>
              <div className="space-y-2">
                <div className="bg-black text-white px-4 py-2 rounded text-sm">
                  📱 App Store
                </div>
                <div className="bg-black text-white px-4 py-2 rounded text-sm">
                  📱 Google Play
                </div>
              </div>
            </div>
          </div>

          {/* Funcionalidades */}
          <div>
            <h3 className="text-blue-600 font-semibold text-lg mb-4">Funcionalidades</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Gestão de Vendas e Clientes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Emissão de Nota Fiscal</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cobrança Automática</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Controle de Contratos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Recorrentes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Compras e Fornecedores</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Estoque e Produtos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Conciliação Bancária</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Gestão Financeira</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Relatório</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Aplicativo CA de bolso</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Conexão com o contador</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-blue-600 font-semibold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Saúde</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Consultorias</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Engenharia</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Educação</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tecnologia</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Comércio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Comércio Absorvida</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-blue-600 font-semibold mb-3">Para parceiros</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contadores</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">BPO Financeiro</a></li>
              </ul>
            </div>
          </div>

          {/* Aprenda */}
          <div>
            <h3 className="text-blue-600 font-semibold text-lg mb-4">Aprenda</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Materiais Ricos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Conta azul na prática</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Podcasts</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Glossário</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Desenvolvedores</a></li>
            </ul>
          </div>

          {/* Conta Mais */}
          <div>
            <h3 className="text-blue-600 font-semibold text-lg mb-4">Conta Mais</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="#" className="text-blue-600 hover:underline">Instagram</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <a href="#" className="text-blue-600 hover:underline">YouTube</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                </svg>
                <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Certificados</h4>
              <div className="space-y-2">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">🏆 AWS</div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">🏆 Microsoft</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Parceiro</h4>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">
                STONE
              </div>
            </div>
          </div>

        </div>

        {/* Canais de Atendimento */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Canais de atendimento</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Ainda não sou cliente:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Telefone: 0800 600 0940</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Já sou cliente:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Telefone: 0800 600 0919</span>
                  <span className="text-xs text-gray-500">(exclusivo para clientes premium)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Exclusivo para Serviços Financeiros:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>SAC: 0800 600 0917</div>
                <div>Ouvidoria: 0800 600 0918</div>
                <div>Atendimento Acessível</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; 2024 BizHeal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}