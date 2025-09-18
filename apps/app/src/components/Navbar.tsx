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
              <span className="text-2xl mr-2">🩺</span>
              <h1 className="text-xl font-bold text-gray-900">BizHeal</h1>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-700 hover:text-blue-600"
            >
              Início
            </button>
            <button 
              onClick={() => router.push('/features')}
              className="text-gray-700 hover:text-blue-600"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => router.push('/pricing')}
              className="text-gray-700 hover:text-blue-600"
            >
              Preços
            </button>
            <button 
              onClick={() => router.push('/login')}
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </button>
            <Button 
              onClick={() => router.push('/register')}
              className="bg-blue-600 hover:bg-blue-700"
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