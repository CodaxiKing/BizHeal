'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@bizheal/ui'

interface OnboardingData {
  companyName: string
  industry: string
  companySize: string
  primaryChallenge: string
  goals: string[]
}

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<OnboardingData>({
    companyName: '',
    industry: '',
    companySize: '',
    primaryChallenge: '',
    goals: []
  })

  // Redirect if not authenticated
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

  const industries = [
    'Tecnologia',
    'E-commerce',
    'Varejo',
    'Serviços',
    'Manufatura',
    'Saúde',
    'Educação',
    'Finanças',
    'Consultoria',
    'Outro'
  ]

  const companySizes = [
    '1-10 funcionários',
    '11-50 funcionários',
    '51-200 funcionários',
    '201-1000 funcionários',
    '1000+ funcionários'
  ]

  const challenges = [
    'Baixo crescimento de receita',
    'Custos operacionais altos',
    'Processos ineficientes',
    'Dificuldade em reter clientes',
    'Falta de visibilidade nos dados',
    'Problemas de qualidade',
    'Gestão de equipe',
    'Competitividade no mercado'
  ]

  const availableGoals = [
    'Aumentar receita',
    'Reduzir custos',
    'Melhorar eficiência',
    'Aumentar satisfação do cliente',
    'Otimizar processos',
    'Expandir mercado',
    'Melhorar qualidade',
    'Automatizar tarefas'
  ]

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        console.error('Error saving onboarding data')
      }
    } catch (error) {
      console.error('Error submitting onboarding:', error)
    } finally {
      setLoading(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.companyName.trim() !== ''
      case 2: return formData.industry !== '' && formData.companySize !== ''
      case 3: return formData.primaryChallenge !== ''
      case 4: return formData.goals.length > 0
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <span className="text-2xl">🩺</span>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Configuração Inicial
          </h1>
          <p className="mt-2 text-gray-600">
            Vamos conhecer sua empresa para personalizar sua experiência
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Passo {currentStep} de 4</span>
            <span>{Math.round((currentStep / 4) * 100)}% concluído</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Informações da Empresa"}
              {currentStep === 2 && "Perfil da Empresa"}
              {currentStep === 3 && "Principal Desafio"}
              {currentStep === 4 && "Objetivos"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Company Name */}
            {currentStep === 1 && (
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da sua empresa
                </label>
                <input
                  id="companyName"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Empresa XPTO Ltda"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                />
              </div>
            )}

            {/* Step 2: Industry and Size */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Qual o setor da sua empresa?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        type="button"
                        className={`p-3 text-left border rounded-md transition-colors ${
                          formData.industry === industry
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, industry }))}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Qual o tamanho da sua empresa?
                  </label>
                  <div className="space-y-2">
                    {companySizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`w-full p-3 text-left border rounded-md transition-colors ${
                          formData.companySize === size
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, companySize: size }))}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Primary Challenge */}
            {currentStep === 3 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Qual o principal desafio da sua empresa hoje?
                </label>
                <div className="space-y-2">
                  {challenges.map((challenge) => (
                    <button
                      key={challenge}
                      type="button"
                      className={`w-full p-3 text-left border rounded-md transition-colors ${
                        formData.primaryChallenge === challenge
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, primaryChallenge: challenge }))}
                    >
                      {challenge}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Goals */}
            {currentStep === 4 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quais são seus principais objetivos? (selecione um ou mais)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {availableGoals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      className={`p-3 text-left border rounded-md transition-colors ${
                        formData.goals.includes(goal)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => handleGoalToggle(goal)}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded border mr-2 flex items-center justify-center ${
                          formData.goals.includes(goal) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                        }`}>
                          {formData.goals.includes(goal) && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        {goal}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Voltar
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || loading}
                >
                  {loading ? 'Salvando...' : 'Concluir Configuração'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}