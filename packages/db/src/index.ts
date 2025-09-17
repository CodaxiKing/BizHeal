// BizHeal Database Client
// Re-export Prisma client and types for use across the monorepo

export { PrismaClient } from '../generated/prisma'
export type {
  User,
  Account,
  Session,
  VerificationToken,
  Subscription,
  BusinessProfile,
  Role,
  SubscriptionStatus
} from '../generated/prisma'

// Utility function to create a singleton Prisma client
import { PrismaClient } from '../generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma