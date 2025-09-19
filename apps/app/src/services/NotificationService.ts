import { prisma } from '@bizheal/db'

export interface CreateNotificationData {
  title: string
  description: string
  type: string
  businessId: string
}

export class NotificationService {
  /**
   * Create a new notification for a business
   */
  static async createNotification(data: CreateNotificationData): Promise<void> {
    try {
      // Check if a similar notification already exists in the last 24 hours
      // to avoid spamming the same notification
      const existingNotification = await prisma.notification.findFirst({
        where: {
          businessId: data.businessId,
          type: data.type,
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
          }
        }
      })

      // If notification already exists, skip creating a new one
      if (existingNotification) {
        return
      }

      await prisma.notification.create({
        data: {
          title: data.title,
          description: data.description,
          type: data.type,
          businessId: data.businessId,
          read: false
        }
      })
    } catch (error) {
      console.error('Error creating notification:', error)
      // Don't throw error to prevent breaking the main analysis flow
    }
  }

  /**
   * Get unread notifications for a business
   */
  static async getUnreadNotifications(businessId: string) {
    try {
      return await prisma.notification.findMany({
        where: {
          businessId,
          read: false
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
    } catch (error) {
      console.error('Error fetching notifications:', error)
      return []
    }
  }

  /**
   * Mark all notifications as read for a business
   */
  static async markAllAsRead(businessId: string): Promise<void> {
    try {
      await prisma.notification.updateMany({
        where: {
          businessId,
          read: false
        },
        data: {
          read: true
        }
      })
    } catch (error) {
      console.error('Error marking notifications as read:', error)
      throw error
    }
  }

  /**
   * Generate churn risk notification if threshold is exceeded
   */
  static async checkAndCreateChurnNotification(
    businessId: string, 
    totalCustomers: number, 
    atRiskCount: number
  ): Promise<void> {
    if (totalCustomers === 0) return

    const churnPercentage = (atRiskCount / totalCustomers) * 100

    // Create notification if more than 10% of customers are at risk
    if (churnPercentage > 10) {
      await this.createNotification({
        title: 'Alto Risco de Churn Detectado',
        description: `${atRiskCount} clientes (${churnPercentage.toFixed(1)}%) estão em risco de churn. É recomendado tomar ações imediatas para reativação.`,
        type: 'churn_alert',
        businessId
      })
    }
  }

  /**
   * Generate revenue concentration notification if threshold is exceeded
   */
  static async checkAndCreateConcentrationNotification(
    businessId: string, 
    concentrationPercentage: number
  ): Promise<void> {
    // Create notification if concentration is higher than 50%
    if (concentrationPercentage > 50) {
      await this.createNotification({
        title: 'Alta Concentração de Receita',
        description: `${concentrationPercentage.toFixed(1)}% da sua receita vem dos top 5 clientes. Considere diversificar sua base de clientes para reduzir riscos.`,
        type: 'concentration_risk',
        businessId
      })
    }
  }
}