'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@bizheal/ui'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-primary">BizHeal</h1>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => router.push('/')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => router.push('/features')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => router.push('/pricing')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => router.push('/login')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Login
            </button>
            <Button 
              onClick={() => router.push('/register')}
              className=""
              size="sm"
            >
              Começar Grátis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}