'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride'

interface OnboardingTourProps {
  onComplete?: () => void
}

export default function OnboardingTour({ onComplete }: OnboardingTourProps) {
  const { data: session } = useSession()
  const [run, setRun] = useState(false)
  const [loading, setLoading] = useState(true)

  // Define the tour steps
  const steps: Step[] = [
    {
      target: '#dashboard-title',
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Bem-vindo ao seu centro de comando!</h3>
          <p>Este é o seu dashboard principal onde você acompanha toda a performance da sua empresa em tempo real.</p>
        </div>
      ),
      placement: 'bottom',
      disableBeacon: true,
    },
    {
      target: '#integrations-button',
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Conecte seus dados</h3>
          <p>O primeiro passo é conectar seus dados aqui. Você pode importar planilhas ou conectar diretamente com suas ferramentas.</p>
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '#churn-scanner-card',
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Análise de Performance</h3>
          <p>Depois de conectar seus dados, os diagnósticos sobre a saúde do seu negócio aparecerão aqui automaticamente.</p>
        </div>
      ),
      placement: 'bottom-start',
    },
    {
      target: '#settings-button',
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Gerencie sua conta</h3>
          <p>Você pode gerenciar sua conta, assinatura e configurações aqui a qualquer momento.</p>
        </div>
      ),
      placement: 'bottom-start',
    },
  ]

  // Check if user has completed onboarding
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      if (!session?.user?.email) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch('/api/user/onboarding-status')
        if (response.ok) {
          const data = await response.json()
          setRun(!data.hasCompletedOnboarding)
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error)
      } finally {
        setLoading(false)
      }
    }

    checkOnboardingStatus()
  }, [session])

  // Handle tour completion
  const handleJoyrideCallback = async (data: CallBackProps) => {
    const { status, action } = data

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false)
      
      // Update user's onboarding status
      try {
        await fetch('/api/user/complete-onboarding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (onComplete) {
          onComplete()
        }
      } catch (error) {
        console.error('Error updating onboarding status:', error)
      }
    }
  }

  // Don't render anything if loading or tour shouldn't run
  if (loading || !run) {
    return null
  }

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#3b82f6', // Use primary color from the app
          textColor: '#374151',
          backgroundColor: '#ffffff',
          overlayColor: 'rgba(0, 0, 0, 0.4)',
          spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 8,
          padding: 20,
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        tooltipTitle: {
          fontSize: '18px',
          marginBottom: '10px',
        },
        tooltipContent: {
          fontSize: '14px',
          lineHeight: '1.5',
        },
        buttonNext: {
          backgroundColor: '#3b82f6',
          borderRadius: 6,
          fontSize: '14px',
          padding: '8px 16px',
        },
        buttonBack: {
          color: '#6b7280',
          marginRight: 'auto',
        },
        buttonSkip: {
          color: '#6b7280',
          fontSize: '14px',
        },
      }}
      locale={{
        back: 'Voltar',
        close: 'Fechar',
        last: 'Finalizar',
        next: 'Próximo',
        skip: 'Pular',
      }}
    />
  )
}