'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

interface MonthlyRevenueData {
  month: string
  revenue: number
}

interface MonthlyRevenueResponse {
  data: MonthlyRevenueData[]
  metrics: {
    totalRevenue: number
    averageMonthlyRevenue: number
    highestMonth: {
      month: string
      revenue: number
    }
    lowestMonth: {
      month: string
      revenue: number
    }
    totalTransactions: number
  }
  message?: string
  error?: string
}

export default function MonthlyRevenueChart() {
  const [data, setData] = useState<MonthlyRevenueData[]>([])
  const [metrics, setMetrics] = useState<MonthlyRevenueResponse['metrics'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMonthlyRevenue = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/analysis/monthly-revenue')
        const result: MonthlyRevenueResponse = await response.json()
        
        if (!response.ok) {
          setError(result.error || result.message || 'Erro ao carregar dados de faturamento')
          return
        }
        
        if (result.data && result.data.length > 0) {
          setData(result.data)
          setMetrics(result.metrics)
        } else {
          setError(result.message || 'Nenhuma transação encontrada. Importe seus dados primeiro.')
        }
      } catch (err) {
        console.error('Error fetching monthly revenue:', err)
        setError('Erro ao carregar dados de faturamento')
      } finally {
        setLoading(false)
      }
    }

    fetchMonthlyRevenue()
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">{`Mês: ${label}`}</p>
          <p className="text-sm font-semibold text-primary">
            {`Faturamento: ${formatCurrency(payload[0].value)}`}
          </p>
        </div>
      )
    }
    return null
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Faturamento Mensal (Últimos 12 Meses)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando dados...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Faturamento Mensal (Últimos 12 Meses)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <svg className="w-12 h-12 text-warning mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-gray-600">{error}</p>
              <p className="text-sm text-gray-500 mt-2">
                Importe seus dados para ver o gráfico de faturamento
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Faturamento Mensal (Últimos 12 Meses)
          </div>
          {metrics && (
            <div className="text-sm text-gray-600">
              Total: {formatCurrency(metrics.totalRevenue)}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
                tickFormatter={(value) => {
                  if (value >= 1000000) {
                    return `${(value / 1000000).toFixed(1)}M`
                  } else if (value >= 1000) {
                    return `${(value / 1000).toFixed(1)}K`
                  }
                  return value.toString()
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="revenue" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                className="hover:opacity-80 transition-opacity"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Metrics summary */}
        {metrics && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-xs text-gray-500">Média Mensal</div>
              <div className="text-sm font-semibold text-gray-900">
                {formatCurrency(metrics.averageMonthlyRevenue)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Melhor Mês</div>
              <div className="text-sm font-semibold text-green-600">
                {metrics.highestMonth.month}
              </div>
              <div className="text-xs text-green-600">
                {formatCurrency(metrics.highestMonth.revenue)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Menor Mês</div>
              <div className="text-sm font-semibold text-red-600">
                {metrics.lowestMonth.month}
              </div>
              <div className="text-xs text-red-600">
                {formatCurrency(metrics.lowestMonth.revenue)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Transações</div>
              <div className="text-sm font-semibold text-gray-900">
                {metrics.totalTransactions.toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}