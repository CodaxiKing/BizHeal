import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@bizheal/db'
import type { Session } from 'next-auth'

export async function POST(request: NextRequest) {
  try {
    const session: Session | null = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      )
    }

    const { companyName, industry, companySize, primaryChallenge, goals } = await request.json()

    // Validate required fields
    if (!companyName || !industry || !companySize || !primaryChallenge || !goals) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    const userId = session.user.id as string

    // Check if business profile already exists
    const existingProfile = await prisma.businessProfile.findUnique({
      where: { userId }
    })

    if (existingProfile) {
      // Update existing profile
      const updatedProfile = await prisma.businessProfile.update({
        where: { userId },
        data: {
          companyName,
          industry,
          companySize,
          primaryChallenge,
          goals
        }
      })
      
      return NextResponse.json({ profile: updatedProfile })
    } else {
      // Create new business profile
      const businessProfile = await prisma.businessProfile.create({
        data: {
          userId,
          companyName,
          industry,
          companySize,
          primaryChallenge,
          goals
        }
      })

      return NextResponse.json({ profile: businessProfile })
    }

  } catch (error) {
    console.error('Onboarding error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}