import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BizHeal - O Médico Digital da sua Empresa',
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
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-primary">BizHeal</h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-gray-700 hover:text-primary">Início</Link>
                <Link href="/features" className="text-gray-700 hover:text-primary">Funcionalidades</Link>
                <Link href="/pricing" className="text-gray-700 hover:text-primary">Preços</Link>
                <Link href="/login" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">Login</Link>
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