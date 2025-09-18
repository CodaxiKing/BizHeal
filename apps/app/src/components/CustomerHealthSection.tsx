'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

interface ChurnAnalysis {
  totalCustomers: number
  atRiskCustomersCount: number
  atRiskCustomersList: Array<{
    customerId: string
    lastTransactionDate: string
    daysSinceLastTransaction: number
    totalTransactions: number
    totalAmount: number
    riskLevel: 'high' | 'medium' | 'low'
  }>
  metrics: {
    totalRevenue: number
    atRiskRevenue: number
    averageTransactionValue: number
    churnRate: string
    riskDistribution: {
      high: number
      medium: number
      low: number
      healthy: number
    }
  }
  insights: {
    mostAtRiskCustomer: any
    averageDaysSinceLastPurchase: number
    topCustomerByRevenue: any
    recentTransactions: Array<{
      customerId: string
      amount: number
      date: string
    }>
  }
  message?: string
}

export default function CustomerHealthSection() {
  const [data, setData] = useState<ChurnAnalysis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchChurnAnalysis()
  }, [])

  const fetchChurnAnalysis = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/analysis/churn-risk')
      const result = await response.json()
      
      if (response.ok) {
        setData(result)
      } else {
        setError(result.error || 'Erro ao carregar análise')
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2">👥</span>
            Saúde dos Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
            <span>Analisando dados...</span>
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
            <span className="mr-2">👥</span>
            Saúde dos Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!data) return null

  if (data.message) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2">👥</span>
            Saúde dos Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>{data.message}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-orange-600 bg-orange-100'
      case 'low': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getRiskText = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return 'Alto Risco'
      case 'medium': return 'Médio Risco'
      case 'low': return 'Baixo Risco'
      default: return 'Saudável'
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total de Clientes</p>
                <p className="text-2xl font-bold">{data.totalCustomers}</p>
              </div>
              <span className="text-2xl">👥</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Em Risco</p>
                <p className="text-2xl font-bold flex items-center">
                  {data.atRiskCustomersCount > 0 && <span className="text-lg mr-1">⚠️</span>}
                  {data.atRiskCustomersCount}
                </p>
              </div>
              <span className="text-2xl">🚨</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taxa de Churn</p>
                <p className="text-2xl font-bold">{data.metrics.churnRate}%</p>
              </div>
              <span className="text-2xl">📉</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Receita em Risco</p>
                <p className="text-2xl font-bold">
                  R$ {(data.metrics.atRiskRevenue / 1000).toFixed(1)}k
                </p>
              </div>
              <span className="text-2xl">💸</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuição de Risco</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{data.metrics.riskDistribution.high}</div>
              <div className="text-sm text-gray-600">Alto Risco</div>
              <div className="text-xs text-gray-500">&gt;180 dias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{data.metrics.riskDistribution.medium}</div>
              <div className="text-sm text-gray-600">Médio Risco</div>
              <div className="text-xs text-gray-500">90-180 dias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{data.metrics.riskDistribution.low}</div>
              <div className="text-sm text-gray-600">Baixo Risco</div>
              <div className="text-xs text-gray-500">30-90 dias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{data.metrics.riskDistribution.healthy}</div>
              <div className="text-sm text-gray-600">Saudáveis</div>
              <div className="text-xs text-gray-500">&lt;30 dias</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* At Risk Customers Table */}
      {data.atRiskCustomersList.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">⚠️</span>
              Clientes em Risco de Churn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Cliente</th>
                    <th className="text-left p-3">Última Compra</th>
                    <th className="text-left p-3">Dias Inativo</th>
                    <th className="text-left p-3">Total Vendas</th>
                    <th className="text-left p-3">Receita Total</th>
                    <th className="text-left p-3">Risco</th>
                  </tr>
                </thead>
                <tbody>
                  {data.atRiskCustomersList.map((customer) => (
                    <tr key={customer.customerId} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{customer.customerId}</td>
                      <td className="p-3">
                        {new Date(customer.lastTransactionDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-3">
                        <span className="font-semibold">
                          {customer.daysSinceLastTransaction} dias
                        </span>
                      </td>
                      <td className="p-3">{customer.totalTransactions}</td>
                      <td className="p-3">R$ {customer.totalAmount.toFixed(2)}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          getRiskColor(customer.riskLevel)
                        }`}>
                          {getRiskText(customer.riskLevel)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}