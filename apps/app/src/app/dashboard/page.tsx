'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, Button } from '@bizheal/ui'
import CustomerHealthSection from '@/components/CustomerHealthSection'
import MonthlyRevenueChart from '@/components/MonthlyRevenueChart'
import RevenueConcentrationCard from '@/components/RevenueConcentrationCard'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading
    if (!session) router.push('/login')
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect to login
  }

  // Mock data for demonstration (as specified in requirements)
  const kpis = [
    {
      title: 'Faturamento',
      value: 'R$ 284.500',
      change: '+12.5%',
      trend: 'up' as const,
      icon: '💰'
    },
    {
      title: 'Despesas',
      value: 'R$ 192.300',
      change: '-3.2%',
      trend: 'down' as const,
      icon: '💸'
    },
    {
      title: 'Lucro',
      value: 'R$ 92.200',
      change: '+18.7%',
      trend: 'up' as const,
      icon: '📈'
    },
    {
      title: 'Churn',
      value: '2.1%',
      change: '-0.8%',
      trend: 'down' as const,
      icon: '👥'
    }
  ]

  const healthStatus = {
    status: 'warning', // 'healthy', 'warning', 'critical'
    score: 72,
    message: 'Atenção necessária em algumas áreas'
  }

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Alta taxa de abandono no checkout',
      description: '20% dos clientes abandonam o carrinho. Sugestão: Simplificar processo de pagamento.',
      action: 'Otimizar Checkout'
    },
    {
      id: 2,
      type: 'info',
      title: 'Oportunidade de upsell identificada',
      description: '40% dos clientes do plano básico usam recursos premium. Considere campanha de upgrade.',
      action: 'Criar Campanha'
    },
    {
      id: 3,
      type: 'critical',
      title: 'Clientes inativos em crescimento',
      description: '15% dos clientes não acessam a plataforma há mais de 30 dias.',
      action: 'Campanha de Reativação'
    }
  ]

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50'
      case 'warning': return 'border-l-yellow-500 bg-yellow-50'
      case 'info': return 'border-l-blue-500 bg-blue-50'
      default: return 'border-l-gray-500 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🩺</span>
                <h1 className="text-2xl font-bold text-gray-900">BizHeal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Olá, {session.user?.name || session.user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={() => router.push('/settings/billing')}>
                Configurações
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard de Saúde Empresarial
          </h2>
          <p className="text-gray-600">
            Visão geral da saúde da sua empresa em tempo real
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {kpi.title}
                </CardTitle>
                <span className="text-2xl">{kpi.icon}</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {kpi.value}
                </div>
                <p className={`text-xs flex items-center ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="mr-1">
                    {kpi.trend === 'up' ? '↗️' : '↘️'}
                  </span>
                  {kpi.change} vs mês anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Health Section */}
        <div className="mb-8">
          <CustomerHealthSection />
        </div>

        {/* Revenue Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <MonthlyRevenueChart />
          </div>
          <div className="lg:col-span-1">
            <RevenueConcentrationCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Scanner */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2">🔍</span>
                Scanner de Saúde
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold ${getHealthColor(healthStatus.status)} mb-4`}>
                  {healthStatus.score}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {healthStatus.message}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Saúde Geral</span>
                    <span>{healthStatus.score}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        healthStatus.score >= 80 ? 'bg-green-500' :
                        healthStatus.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${healthStatus.score}%` }}
                    ></div>
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">
                  Executar Novo Scanner
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alerts and Recommendations */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2">🚨</span>
                Alertas e Recomendações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`border-l-4 p-4 rounded ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {alert.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {alert.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button 
                  onClick={() => router.push('/dashboard/import')}
                  className="h-20 flex flex-col items-center justify-center"
                >
                  <span className="text-2xl mb-1">📤</span>
                  <span>Importar Dados</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">📊</span>
                  <span>Gerar Relatório</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">🔗</span>
                  <span>Conectar Sistema</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">⚙️</span>
                  <span>Configurações</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}