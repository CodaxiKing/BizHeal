import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@bizheal/db'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório.' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      // Don't reveal if user exists or not for security
      return NextResponse.json({ message: 'Se o email existir, você receberá as instruções.' })
    }

    // Generate password reset token
    const resetToken = crypto.randomUUID()
    const resetTokenExpiry = new Date()
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1) // 1 hour expiry

    // Save reset token to database
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: resetToken,
        expires: resetTokenExpiry
      }
    })

    // TODO: Send email with reset link
    // For now, we'll just log it (in production, integrate with email service)
    console.log(`Password reset link for ${email}: /reset-password?token=${resetToken}`)

    return NextResponse.json({ 
      message: 'Se o email existir, você receberá as instruções.' 
    })

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}