import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BizHeal - Plataforma de Inteligência Empresarial',
  description: 'Analisamos dados para encontrar ineficiências e sugerir soluções para sua empresa.',
  keywords: ['business', 'analytics', 'efficiency', 'saas', 'digital'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-blue-600">BizHeal</h1>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <Link href="/features" className="text-gray-700 hover:text-blue-600 flex items-center">
                    Funcionalidades
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Análise de Dados</h3>
                        <p className="text-sm text-gray-600">Análise completa dos seus dados de negócio</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Relatórios</h3>
                        <p className="text-sm text-gray-600">Relatórios automatizados e insights</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Integrações</h3>
                        <p className="text-sm text-gray-600">Conecte suas ferramentas favoritas</p>
                      </div>
                      <div>
                        <Link href="/features" className="block font-semibold text-blue-600">Todas as Funcionalidades</Link>
                        <p className="text-sm text-gray-600">Veja todas as funcionalidades</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 flex items-center cursor-pointer">
                    Soluções
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <div className="absolute top-full left-0 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">E-commerce</h3>
                        <p className="text-sm text-gray-600">Soluções para lojas online</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Varejo</h3>
                        <p className="text-sm text-gray-600">Gestão para lojas físicas</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Serviços</h3>
                        <p className="text-sm text-gray-600">Para empresas de serviços</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Preços</Link>
                
                <div className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 flex items-center cursor-pointer">
                    Recursos
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <div className="absolute top-full right-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-2">
                      <div>
                        <span className="block font-semibold text-gray-900">Blog</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-gray-900">Central de Ajuda</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-gray-900">Contato</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/login" className="text-gray-700 hover:text-blue-600">Entrar</Link>
                <Link 
                  href="https://app.bizheal.com/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Teste Grátis
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-500">© 2024 BizHeal. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}