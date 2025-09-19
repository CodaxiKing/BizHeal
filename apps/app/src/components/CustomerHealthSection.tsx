'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, Button } from '@bizheal/ui'

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
  const [exportLoading, setExportLoading] = useState(false)
  const [exportMessage, setExportMessage] = useState<string | null>(null)

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
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Desempenho dos Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mr-2"></div>
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
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Desempenho dos Clientes
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
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Desempenho dos Clientes
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
      default: return 'Estável'
    }
  }

  const handleExportCSV = async () => {
    if (!data || data.atRiskCustomersCount === 0) {
      setExportMessage('Nenhum cliente em risco para exportar.')
      setTimeout(() => setExportMessage(null), 3000)
      return
    }

    try {
      setExportLoading(true)
      setExportMessage(null)

      const response = await fetch('/api/analysis/churn-risk?format=csv')
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `Erro ${response.status}: Falha ao exportar dados`)
      }

      // Get the CSV content as a blob
      const blob = await response.blob()
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'clientes_em_risco.csv'
      document.body.appendChild(link)
      link.click()
      
      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
      setExportMessage('Exportação concluída com sucesso!')
      setTimeout(() => setExportMessage(null), 3000)
      
    } catch (error) {
      console.error('Export error:', error)
      setExportMessage(error instanceof Error ? error.message : 'Erro ao exportar dados. Tente novamente.')
      setTimeout(() => setExportMessage(null), 5000)
    } finally {
      setExportLoading(false)
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
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
              <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
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
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
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
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
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
              <div className="text-sm text-gray-600">Estáveis</div>
              <div className="text-xs text-gray-500">&lt;30 dias</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* At Risk Customers Table */}
      {data.atRiskCustomersList.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Clientes em Risco de Churn
              </CardTitle>
              <div className="flex flex-col items-end gap-2">
                <Button 
                  onClick={handleExportCSV}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  disabled={exportLoading || !data || data.atRiskCustomersCount === 0}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {exportLoading ? 'Exportando...' : 'Exportar para CSV'}
                </Button>
                {exportMessage && (
                  <div className={`text-xs px-2 py-1 rounded ${
                    exportMessage.includes('sucesso') 
                      ? 'text-green-700 bg-green-100' 
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {exportMessage}
                  </div>
                )}
              </div>
            </div>
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