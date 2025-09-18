'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'
import Papa from 'papaparse'

interface CsvRow {
  data_venda: string
  valor: string
  id_cliente: string
}

interface ParsedTransaction {
  date: string
  amount: number
  customerId: string
}

export default function ImportPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [previewData, setPreviewData] = useState<ParsedTransaction[]>([])

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
    router.push('/login')
    return null
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setMessage(null)
      
      // Preview first few rows
      Papa.parse(selectedFile, {
        header: true,
        preview: 5,
        complete: (results) => {
          const data = results.data as CsvRow[]
          const parsed = data
            .filter(row => row.data_venda && row.valor && row.id_cliente)
            .map(row => ({
              date: row.data_venda,
              amount: parseFloat(row.valor.replace(/[^\d.-]/g, '')),
              customerId: row.id_cliente
            }))
          setPreviewData(parsed)
        },
        error: (error) => {
          setMessage({ type: 'error', text: `Erro ao ler arquivo: ${error.message}` })
        }
      })
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setMessage({ type: 'error', text: 'Selecione um arquivo CSV primeiro.' })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      Papa.parse(file, {
        header: true,
        complete: async (results) => {
          const data = results.data as CsvRow[]
          
          // Validate and transform data
          const transactions: ParsedTransaction[] = []
          const errors: string[] = []
          
          data.forEach((row, index) => {
            if (!row.data_venda || !row.valor || !row.id_cliente) {
              errors.push(`Linha ${index + 2}: Dados incompletos`)
              return
            }
            
            const amount = parseFloat(row.valor.replace(/[^\d.-]/g, ''))
            if (isNaN(amount)) {
              errors.push(`Linha ${index + 2}: Valor inválido`)
              return
            }
            
            // Validate date format (expecting YYYY-MM-DD or DD/MM/YYYY)
            const dateStr = row.data_venda.trim()
            let date: Date
            
            if (dateStr.includes('/')) {
              // DD/MM/YYYY format
              const [day, month, year] = dateStr.split('/')
              date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
            } else {
              // YYYY-MM-DD format
              date = new Date(dateStr)
            }
            
            if (isNaN(date.getTime())) {
              errors.push(`Linha ${index + 2}: Data inválida`)
              return
            }
            
            transactions.push({
              date: date.toISOString(),
              amount,
              customerId: row.id_cliente.trim()
            })
          })
          
          if (errors.length > 0) {
            setMessage({ 
              type: 'error', 
              text: `Erros encontrados:\n${errors.slice(0, 5).join('\n')}${errors.length > 5 ? '\n...' : ''}` 
            })
            setLoading(false)
            return
          }
          
          if (transactions.length === 0) {
            setMessage({ type: 'error', text: 'Nenhuma transação válida encontrada no arquivo.' })
            setLoading(false)
            return
          }
          
          // Send to API
          try {
            const response = await fetch('/api/data/upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ transactions }),
            })
            
            const result = await response.json()
            
            if (response.ok) {
              setMessage({ 
                type: 'success', 
                text: `Sucesso! ${result.count} transações foram importadas.` 
              })
              setFile(null)
              setPreviewData([])
              // Reset file input
              const fileInput = document.getElementById('file-input') as HTMLInputElement
              if (fileInput) fileInput.value = ''
            } else {
              setMessage({ type: 'error', text: result.error || 'Erro ao importar dados.' })
            }
          } catch (error) {
            setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente.' })
          }
          
          setLoading(false)
        },
        error: (error) => {
          setMessage({ type: 'error', text: `Erro ao processar arquivo: ${error.message}` })
          setLoading(false)
        }
      })
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro inesperado. Tente novamente.' })
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => router.push('/dashboard')}
                className="mr-4"
              >
                ← Voltar ao Dashboard
              </Button>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <h1 className="text-2xl font-bold text-gray-900">Importar Dados</h1>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {session.user?.name || session.user?.email}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Como importar seus dados de vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-4">
                Para que o BizHeal possa analisar seu negócio, precisamos dos seus dados de vendas. 
                Siga estas instruções:
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Formato do arquivo CSV</h4>
                <p className="text-blue-800 text-sm mb-2">Seu arquivo deve ter exatamente estas 3 colunas:</p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• <strong>data_venda</strong>: Data da venda (formato: DD/MM/YYYY ou YYYY-MM-DD)</li>
                  <li>• <strong>valor</strong>: Valor da venda (ex: 150.50 ou R$ 150,50)</li>
                  <li>• <strong>id_cliente</strong>: Identificador único do cliente</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                data_venda,valor,id_cliente<br/>
                15/01/2024,150.50,CLIENTE001<br/>
                16/01/2024,R$ 75,30,CLIENTE002<br/>
                17/01/2024,200.00,CLIENTE001
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload do Arquivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="file-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Selecione seu arquivo CSV
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              
              {message && (
                <div className={`p-4 rounded-md ${
                  message.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <pre className="whitespace-pre-wrap text-sm">{message.text}</pre>
                </div>
              )}
              
              <Button 
                onClick={handleUpload} 
                disabled={!file || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processando...
                  </>
                ) : (
                  'Importar Dados'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        {previewData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Prévia dos dados (primeiras 5 linhas)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Data</th>
                      <th className="text-left p-2">Valor</th>
                      <th className="text-left p-2">Cliente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{new Date(row.date).toLocaleDateString('pt-BR')}</td>
                        <td className="p-2">R$ {row.amount.toFixed(2)}</td>
                        <td className="p-2">{row.customerId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}