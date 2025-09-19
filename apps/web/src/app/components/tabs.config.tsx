import React from 'react'

export interface FeatureTab {
  id: string
  label: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  icon: string
  cta: {
    label: string
    href: string
  }
}

export const featureTabs: FeatureTab[] = [
  {
    id: 'analytics',
    label: 'Análise Inteligente',
    eyebrow: 'Business Intelligence',
    title: 'Análise de dados que acelera seu crescimento',
    description: 'Nossa plataforma utiliza inteligência artificial para analisar seus dados financeiros e identificar oportunidades de otimização em tempo real.',
    bullets: [
      'Detecção automática de tendências e padrões',
      'Alertas inteligentes para oportunidades de crescimento',
      'Previsões baseadas em dados históricos',
      'Relatórios executivos automatizados'
    ],
    icon: 'analytics',
    cta: {
      label: 'Ver Análises',
      href: '/insights'
    }
  },
  {
    id: 'churn',
    label: 'Prevenção de Churn',
    eyebrow: 'Retenção de Clientes',
    title: 'Previna a perda de clientes antes que aconteça',
    description: 'Sistema avançado de detecção de churn que identifica clientes em risco e sugere ações preventivas para aumentar a retenção.',
    bullets: [
      'Identificação precoce de clientes em risco',
      'Score de propensão ao churn em tempo real',
      'Sugestões automáticas de ações preventivas',
      'Segmentação inteligente para campanhas direcionadas'
    ],
    icon: 'trending-up',
    cta: {
      label: 'Conhecer Detecção',
      href: '/features'
    }
  },
  {
    id: 'integrations',
    label: 'Integrações Nativas',
    eyebrow: 'Conectividade',
    title: 'Conecte todos seus sistemas em um só lugar',
    description: 'Integre facilmente com Shopify, sistemas bancários, ERPs e outras plataformas. Importe dados automaticamente e mantenha tudo sincronizado.',
    bullets: [
      'Conexão com +50 plataformas populares',
      'Sincronização automática de dados',
      'Import de dados via CSV e APIs',
      'Configuração em poucos cliques'
    ],
    icon: 'link',
    cta: {
      label: 'Ver Integrações',
      href: '/integrations'
    }
  },
  {
    id: 'dashboard',
    label: 'Dashboards Executivos',
    eyebrow: 'Visualização',
    title: 'Dashboards que simplificam a tomada de decisão',
    description: 'Painéis intuitivos e personalizáveis que apresentam os KPIs mais importantes do seu negócio de forma clara e acionável.',
    bullets: [
      'Dashboards personalizáveis por função',
      'Visualizações interativas e em tempo real',
      'Alertas visuais para métricas críticas',
      'Export de relatórios profissionais'
    ],
    icon: 'chart-bar',
    cta: {
      label: 'Ver Dashboards',
      href: '/dashboard'
    }
  },
  {
    id: 'reports',
    label: 'Relatórios Automatizados',
    eyebrow: 'Reportes',
    title: 'Relatórios inteligentes que economizam tempo',
    description: 'Geração automática de relatórios executivos, financeiros e operacionais. Receba insights valiosos sem esforço manual.',
    bullets: [
      'Relatórios automáticos por email',
      'Templates personalizáveis por setor',
      'Análise comparativa automática',
      'Insights e recomendações incluídos'
    ],
    icon: 'document-report',
    cta: {
      label: 'Ver Relatórios',
      href: '/features'
    }
  }
]

export const getFeatureIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    analytics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    'trending-up': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    link: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    'chart-bar': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    'document-report': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
  
  return iconMap[iconName] || iconMap.analytics
}