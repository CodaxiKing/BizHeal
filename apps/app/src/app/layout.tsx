import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BizHeal App - Painel de Controle',
  description: 'Painel de controle do BizHeal - Gerencie a saúde da sua empresa',
  keywords: ['business', 'analytics', 'dashboard', 'saas'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}