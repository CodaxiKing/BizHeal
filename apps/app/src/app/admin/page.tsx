'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

interface UserData {
  id: string
  name: string | null
  email: string
  role: string
  createdAt: string
  subscription?: {
    status: string
    stripePriceId: string | null
    currentPeriodEnd: string | null
  } | null
  businessProfile?: {
    companyName: string
    industry: string
    companySize: string | null
  } | null
}

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/login')
      return
    }

    // Check if user is admin
    if (session.user?.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }

    fetchUsers()
  }, [session, status, router])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data.users)
      } else {
        console.error('Error fetching users')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRoleChange = async (userId: string, newRole: 'USER' | 'ADMIN') => {
    try {
      const response = await fetch('/api/admin/users/role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          role: newRole,
        }),
      })

      if (response.ok) {
        // Refresh users list
        await fetchUsers()
      } else {
        console.error('Error updating user role')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-600 bg-green-100'
      case 'TRIALING': return 'text-blue-600 bg-blue-100'
      case 'PAST_DUE': return 'text-yellow-600 bg-yellow-100'
      case 'CANCELED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'ACTIVE': 'Ativa',
      'TRIALING': 'Teste',
      'PAST_DUE': 'Atraso',
      'CANCELED': 'Cancelada'
    }
    return statusMap[status] || 'Gratuita'
  }

  const getPlanName = (stripePriceId: string | null) => {
    const priceIdToPlan: { [key: string]: string } = {
      'price_pro_monthly': 'Pro',
      'price_enterprise_monthly': 'Enterprise'
    }
    return priceIdToPlan[stripePriceId || ''] || 'Básico'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
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
                <span className="text-2xl mr-3">🔧</span>
                <h1 className="text-2xl font-bold text-gray-900">Painel de Administração</h1>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Admin: {session.user?.name || session.user?.email}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Total de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{users.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Assinantes Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {users.filter(u => u.subscription?.status === 'ACTIVE').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Admins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {users.filter(u => u.role === 'ADMIN').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários Registrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Nome/Email</th>
                    <th className="text-left p-3">Empresa</th>
                    <th className="text-left p-3">Plano</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Role</th>
                    <th className="text-left p-3">Cadastro</th>
                    <th className="text-left p-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{user.name || 'N/A'}</div>
                          <div className="text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div>
                          <div className="font-medium">
                            {user.businessProfile?.companyName || 'N/A'}
                          </div>
                          <div className="text-gray-500">
                            {user.businessProfile?.industry || 'N/A'}
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        {getPlanName(user.subscription?.stripePriceId || null)}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          getStatusColor(user.subscription?.status || 'FREE')
                        }`}>
                          {getStatusText(user.subscription?.status || 'FREE')}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'ADMIN' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">
                        {formatDate(user.createdAt)}
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedUser(user)}
                          >
                            Ver Detalhes
                          </Button>
                          {user.role !== 'ADMIN' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRoleChange(user.id, 'ADMIN')}
                            >
                              Tornar Admin
                            </Button>
                          )}
                          {user.role === 'ADMIN' && user.id !== session.user?.id && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRoleChange(user.id, 'USER')}
                            >
                              Remover Admin
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Detalhes do Usuário</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedUser(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Informações Pessoais</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Nome:</span>
                      <div>{selectedUser.name || 'N/A'}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <div>{selectedUser.email}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Cadastro:</span>
                      <div>{formatDate(selectedUser.createdAt)}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Role:</span>
                      <div>{selectedUser.role}</div>
                    </div>
                  </div>
                </div>

                {selectedUser.businessProfile && (
                  <div>
                    <h4 className="font-semibold mb-2">Perfil da Empresa</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Empresa:</span>
                        <div>{selectedUser.businessProfile.companyName}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Setor:</span>
                        <div>{selectedUser.businessProfile.industry}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Tamanho:</span>
                        <div>{selectedUser.businessProfile.companySize || 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUser.subscription && (
                  <div>
                    <h4 className="font-semibold mb-2">Assinatura</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Plano:</span>
                        <div>{getPlanName(selectedUser.subscription.stripePriceId)}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Status:</span>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            getStatusColor(selectedUser.subscription.status)
                          }`}>
                            {getStatusText(selectedUser.subscription.status)}
                          </span>
                        </div>
                      </div>
                      {selectedUser.subscription.currentPeriodEnd && (
                        <div>
                          <span className="text-gray-500">Próxima cobrança:</span>
                          <div>{formatDate(selectedUser.subscription.currentPeriodEnd)}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}