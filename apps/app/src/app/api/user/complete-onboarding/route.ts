import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { PrismaClient } from '@bizheal/db'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // Get the current session
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'User not authenticated' },
        { status: 401 }
      )
    }

    // Update the user's onboarding status
    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email
      },
      data: {
        hasCompletedOnboarding: true
      },
      select: {
        id: true,
        hasCompletedOnboarding: true
      }
    })

    return NextResponse.json({
      success: true,
      hasCompletedOnboarding: updatedUser.hasCompletedOnboarding
    })

  } catch (error) {
    console.error('Error updating onboarding status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}