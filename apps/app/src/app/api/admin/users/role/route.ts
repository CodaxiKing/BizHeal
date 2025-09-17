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

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id as string }
    })

    if (!currentUser || currentUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem alterar roles.' },
        { status: 403 }
      )
    }

    const { userId, role } = await request.json()

    // Validate input
    if (!userId || !role) {
      return NextResponse.json(
        { error: 'UserId e role são obrigatórios' },
        { status: 400 }
      )
    }

    if (!['USER', 'ADMIN'].includes(role)) {
      return NextResponse.json(
        { error: 'Role inválida. Use USER ou ADMIN.' },
        { status: 400 }
      )
    }

    // Prevent user from removing their own admin role
    if (userId === session.user.id && role === 'USER') {
      return NextResponse.json(
        { error: 'Você não pode remover sua própria permissão de administrador.' },
        { status: 400 }
      )
    }

    // Update user role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    })

    return NextResponse.json({ 
      message: 'Role atualizada com sucesso',
      user: updatedUser
    })

  } catch (error) {
    console.error('Role update error:', error)
    
    // Check if user not found
    if ((error as any).code === 'P2025') {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}