'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

interface RevenueConcentrationData {
  totalRevenue: number
  top5CustomersRevenue: number
  concentrationPercentage: number
  top5CustomersList: Array<{
    customerId: string
    revenue: number
  }>
}

interface RevenueConcentrationResponse {
  message?: string
  error?: string
  totalRevenue?: number
  top5CustomersRevenue?: number
  concentrationPercentage?: number
  top5CustomersList?: Array<{
    customerId: string
    revenue: number
  }>
}

export default function RevenueConcentrationCard() {
  const [data, setData] = useState<RevenueConcentrationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRevenueConcentration()
  }, [])

  const fetchRevenueConcentration = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/analysis/revenue-concentration')
      const result: RevenueConcentrationResponse = await response.json()
      
      if (response.ok) {
        if (result.message) {
          setError(result.message)
        } else {
          setData(result as RevenueConcentrationData)
        }
      } else {
        setError(result.error || 'Erro ao carregar análise')
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const getConcentrationLevel = (percentage: number) => {
    if (percentage > 50) {
      return {
        color: 'text-red-600 bg-red-100',
        icon: 'warning',
        label: 'Risco Alto',
        textColor: 'text-red-600'
      }
    } else if (percentage >= 25) {
      return {
        color: 'text-yellow-600 bg-yellow-100',
        icon: 'caution',
        label: 'Atenção',
        textColor: 'text-yellow-600'
      }
    } else {
      return {
        color: 'text-green-600 bg-green-100',
        icon: 'success',
        label: 'Estável',
        textColor: 'text-green-600'
      }
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Risco de Concentração
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mr-2"></div>
            <span>Analisando concentração...</span>
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
            Risco de Concentração
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

  const concentrationLevel = getConcentrationLevel(data.concentrationPercentage)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Risco de Concentração
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold ${concentrationLevel.color} mb-4`}>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {concentrationLevel.icon === 'warning' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />}
              {concentrationLevel.icon === 'caution' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
              {concentrationLevel.icon === 'success' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
            </svg>
            <span className="text-lg">{data.concentrationPercentage.toFixed(1)}%</span>
          </div>
          <div className={`text-sm font-medium ${concentrationLevel.textColor} mb-2`}>
            {concentrationLevel.label}
          </div>
          <p className="text-xs text-gray-600 max-w-xs mx-auto">
            Isso representa a porcentagem da sua receita que depende dos seus 5 maiores clientes.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Receita Total:</span>
            <span className="font-medium">{formatCurrency(data.totalRevenue)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Top 5 Clientes:</span>
            <span className="font-medium">{formatCurrency(data.top5CustomersRevenue)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Concentração:</span>
            <span className={`font-medium ${concentrationLevel.textColor}`}>
              {data.concentrationPercentage.toFixed(1)}%
            </span>
          </div>
        </div>

        {data.top5CustomersList.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Top 5 Clientes</h4>
            <div className="space-y-2">
              {data.top5CustomersList.map((customer, index) => (
                <div key={customer.customerId} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">
                    #{index + 1} - {customer.customerId.substring(0, 8)}...
                  </span>
                  <span className="font-medium">{formatCurrency(customer.revenue)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}