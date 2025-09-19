'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@bizheal/ui'

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Mapear para páginas existentes
  const dropdownData = {
    funcionalidades: {
      title: 'Funcionalidades',
      items: [
        { name: 'Análise de Dados', description: 'Análise completa dos seus dados de negócio', href: '/insights' },
        { name: 'Relatórios', description: 'Relatórios automatizados e insights', href: '/dashboard' },
        { name: 'Integrações', description: 'Conecte suas ferramentas favoritas', href: '/integrations' },
        { name: 'Todas as Funcionalidades', description: 'Veja todas as funcionalidades', href: '/features' }
      ]
    },
    solucoes: {
      title: 'Soluções',
      items: [
        { name: 'E-commerce', description: 'Soluções para lojas online', href: '/features#ecommerce' },
        { name: 'Serviços', description: 'Para empresas de serviços', href: '/features#services' },
        { name: 'Varejo', description: 'Para o setor varejista', href: '/features#retail' },
        { name: 'Todas as Soluções', description: 'Veja todas as soluções', href: '/features' }
      ]
    },
    recursos: {
      title: 'Recursos',
      items: [
        { name: 'Onboarding', description: 'Configure sua conta', href: '/onboarding' },
        { name: 'Dashboard', description: 'Painel principal', href: '/dashboard' },
        { name: 'Configurações', description: 'Gerencie sua conta', href: '/settings/billing' },
        { name: 'Todas as Funcionalidades', description: 'Explore todas as opções', href: '/features' }
      ]
    }
  }

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fechar dropdown ao pressionar Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav ref={navRef} className="border-b bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo - Clicável para ir ao início */}
          <div className="flex items-center">
            <Link 
              href="/"
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
              onClick={closeDropdowns}
            >
              <h1 className="text-2xl font-bold text-blue-600">BizHeal</h1>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Funcionalidades Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('funcionalidades')}
                onMouseEnter={() => setActiveDropdown('funcionalidades')}
                aria-expanded={activeDropdown === 'funcionalidades'}
                aria-controls="funcionalidades-dropdown"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Funcionalidades
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'funcionalidades' && (
                <div 
                  id="funcionalidades-dropdown"
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Funcionalidades</h3>
                    <div className="space-y-2">
                      {dropdownData.funcionalidades.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDropdowns}
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Soluções Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('solucoes')}
                onMouseEnter={() => setActiveDropdown('solucoes')}
                aria-expanded={activeDropdown === 'solucoes'}
                aria-controls="solucoes-dropdown"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Soluções
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'solucoes' && (
                <div 
                  id="solucoes-dropdown"
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Soluções por Segmento</h3>
                    <div className="space-y-2">
                      {dropdownData.solucoes.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDropdowns}
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preços - Link simples */}
            <Link 
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={closeDropdowns}
            >
              Preços
            </Link>

            {/* Recursos Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('recursos')}
                onMouseEnter={() => setActiveDropdown('recursos')}
                aria-expanded={activeDropdown === 'recursos'}
                aria-controls="recursos-dropdown"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Recursos
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'recursos' && (
                <div 
                  id="recursos-dropdown"
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recursos</h3>
                    <div className="space-y-2">
                      {dropdownData.recursos.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDropdowns}
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Botões Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={closeDropdowns}
            >
              Entrar
            </Link>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/register" onClick={closeDropdowns}>
                Teste Grátis
              </Link>
            </Button>
          </div>

          {/* Botão Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="space-y-4">
              {/* Links principais mobile */}
              <Link 
                href="/features" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeDropdowns}
              >
                Funcionalidades
              </Link>
              <Link 
                href="/pricing" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeDropdowns}
              >
                Preços
              </Link>
              <Link 
                href="/integrations" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeDropdowns}
              >
                Integrações
              </Link>
              <Link 
                href="/dashboard" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeDropdowns}
              >
                Dashboard
              </Link>
              
              {/* Separator */}
              <div className="border-t border-gray-200 pt-4">
                <Link 
                  href="/login" 
                  className="block text-gray-700 hover:text-blue-600 font-medium mb-3"
                  onClick={closeDropdowns}
                >
                  Entrar
                </Link>
                <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/register" onClick={closeDropdowns}>
                    Teste Grátis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}