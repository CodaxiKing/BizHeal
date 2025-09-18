export interface Transaction {
  id: string
  date: Date
  amount: number
  customerId: string
  description?: string | null
  businessId: string
  createdAt: Date
  updatedAt: Date
}

export interface CustomerActivity {
  customerId: string
  lastTransactionDate: Date
  daysSinceLastTransaction: number
  totalTransactions: number
  totalAmount: number
}

export interface ChurnAnalysisResult {
  totalCustomers: number
  atRiskCustomersCount: number
  atRiskCustomersList: Array<CustomerActivity & { riskLevel: string }>
  metrics: {
    totalRevenue: number
    atRiskRevenue: number
    averageTransactionValue: number
    churnRate: string
    riskDistribution: {
      high: number
      medium: number
      low: number
      healthy: number
    }
  }
  insights: {
    mostAtRiskCustomer: CustomerActivity | null
    averageDaysSinceLastPurchase: number
    topCustomerByRevenue: CustomerActivity
    recentTransactions: Array<{
      customerId: string
      amount: number
      date: string
    }>
  }
}

export interface RevenueConcentrationResult {
  totalRevenue: number
  top5CustomersRevenue: number
  concentrationPercentage: number
  top5CustomersList: Array<{
    customerId: string
    revenue: number
  }>
}

export class AnalysisService {
  private static readonly CHURN_THRESHOLD_DAYS = 90 // 90 days without activity = at risk
  private static readonly HIGH_RISK_THRESHOLD_DAYS = 180 // 6 months
  private static readonly MEDIUM_RISK_THRESHOLD_DAYS = 90 // 3 months
  private static readonly LOW_RISK_THRESHOLD_DAYS = 30 // 1 month

  /**
   * Calculate churn risk analysis for a list of transactions
   * @param transactions Array of transactions to analyze
   * @param currentDate Optional current date for calculations (defaults to new Date())
   * @returns ChurnAnalysisResult object with comprehensive analysis
   */
  public static calculateChurnRisk(
    transactions: Transaction[], 
    currentDate: Date = new Date()
  ): ChurnAnalysisResult {
    if (transactions.length === 0) {
      return {
        totalCustomers: 0,
        atRiskCustomersCount: 0,
        atRiskCustomersList: [],
        metrics: {
          totalRevenue: 0,
          atRiskRevenue: 0,
          averageTransactionValue: 0,
          churnRate: '0.0',
          riskDistribution: {
            high: 0,
            medium: 0,
            low: 0,
            healthy: 0
          }
        },
        insights: {
          mostAtRiskCustomer: null,
          averageDaysSinceLastPurchase: 0,
          topCustomerByRevenue: null as any,
          recentTransactions: []
        }
      }
    }

    // Group transactions by customer
    const customerMap = this.groupTransactionsByCustomer(transactions)
    
    // Calculate customer activities
    const customerActivities = this.calculateCustomerActivities(customerMap, currentDate)
    
    // Sort by days since last transaction (most at risk first)
    customerActivities.sort((a, b) => b.daysSinceLastTransaction - a.daysSinceLastTransaction)
    
    // Identify customers at risk
    const atRiskCustomers = customerActivities.filter(
      customer => customer.daysSinceLastTransaction >= this.CHURN_THRESHOLD_DAYS
    )
    
    // Calculate metrics
    const metrics = this.calculateMetrics(customerActivities, atRiskCustomers, transactions)
    
    // Calculate risk distribution
    const riskDistribution = this.calculateRiskDistribution(customerActivities)
    
    // Generate insights
    const insights = this.generateInsights(customerActivities, atRiskCustomers, transactions)
    
    return {
      totalCustomers: customerActivities.length,
      atRiskCustomersCount: atRiskCustomers.length,
      atRiskCustomersList: atRiskCustomers.slice(0, 20).map(customer => ({
        ...customer,
        riskLevel: this.determineRiskLevel(customer.daysSinceLastTransaction)
      })),
      metrics: {
        ...metrics,
        riskDistribution
      },
      insights
    }
  }

  /**
   * Group transactions by customer ID
   */
  private static groupTransactionsByCustomer(transactions: Transaction[]) {
    const customerMap = new Map<string, {
      transactions: Transaction[]
      lastDate: Date
      totalAmount: number
    }>()

    transactions.forEach(transaction => {
      const existing = customerMap.get(transaction.customerId)
      if (existing) {
        existing.transactions.push(transaction)
        existing.totalAmount += transaction.amount
        if (transaction.date > existing.lastDate) {
          existing.lastDate = transaction.date
        }
      } else {
        customerMap.set(transaction.customerId, {
          transactions: [transaction],
          lastDate: transaction.date,
          totalAmount: transaction.amount
        })
      }
    })

    return customerMap
  }

  /**
   * Calculate customer activities from grouped transactions
   */
  private static calculateCustomerActivities(
    customerMap: Map<string, { transactions: Transaction[], lastDate: Date, totalAmount: number }>,
    currentDate: Date
  ): CustomerActivity[] {
    const customerActivities: CustomerActivity[] = []

    customerMap.forEach((data, customerId) => {
      const daysSinceLastTransaction = Math.floor(
        (currentDate.getTime() - data.lastDate.getTime()) / (1000 * 60 * 60 * 24)
      )

      customerActivities.push({
        customerId,
        lastTransactionDate: data.lastDate,
        daysSinceLastTransaction,
        totalTransactions: data.transactions.length,
        totalAmount: data.totalAmount
      })
    })

    return customerActivities
  }

  /**
   * Calculate financial and performance metrics
   */
  private static calculateMetrics(
    customerActivities: CustomerActivity[],
    atRiskCustomers: CustomerActivity[],
    transactions: Transaction[]
  ) {
    const totalRevenue = customerActivities.reduce((sum, customer) => sum + customer.totalAmount, 0)
    const atRiskRevenue = atRiskCustomers.reduce((sum, customer) => sum + customer.totalAmount, 0)
    const averageTransactionValue = totalRevenue / transactions.length
    const churnRate = (atRiskCustomers.length / customerActivities.length * 100).toFixed(1)

    return {
      totalRevenue,
      atRiskRevenue,
      averageTransactionValue,
      churnRate
    }
  }

  /**
   * Calculate risk distribution across different risk levels
   */
  private static calculateRiskDistribution(customerActivities: CustomerActivity[]) {
    const highRisk = customerActivities.filter(c => c.daysSinceLastTransaction > this.HIGH_RISK_THRESHOLD_DAYS).length
    const mediumRisk = customerActivities.filter(c => 
      c.daysSinceLastTransaction > this.MEDIUM_RISK_THRESHOLD_DAYS && 
      c.daysSinceLastTransaction <= this.HIGH_RISK_THRESHOLD_DAYS
    ).length
    const lowRisk = customerActivities.filter(c => 
      c.daysSinceLastTransaction > this.LOW_RISK_THRESHOLD_DAYS && 
      c.daysSinceLastTransaction <= this.MEDIUM_RISK_THRESHOLD_DAYS
    ).length
    const healthy = customerActivities.length - highRisk - mediumRisk - lowRisk

    return {
      high: highRisk,
      medium: mediumRisk,
      low: lowRisk,
      healthy
    }
  }

  /**
   * Generate business insights from the analysis
   */
  private static generateInsights(
    customerActivities: CustomerActivity[],
    atRiskCustomers: CustomerActivity[],
    transactions: Transaction[]
  ) {
    return {
      mostAtRiskCustomer: atRiskCustomers[0] || null,
      averageDaysSinceLastPurchase: Math.round(
        customerActivities.reduce((sum, c) => sum + c.daysSinceLastTransaction, 0) / customerActivities.length
      ),
      topCustomerByRevenue: customerActivities.reduce((prev, current) => 
        current.totalAmount > prev.totalAmount ? current : prev
      ),
      recentTransactions: transactions
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 5)
        .map(t => ({
          customerId: t.customerId,
          amount: t.amount,
          date: t.date.toISOString()
        }))
    }
  }

  /**
   * Determine risk level based on days since last transaction
   */
  private static determineRiskLevel(daysSinceLastTransaction: number): string {
    if (daysSinceLastTransaction > this.HIGH_RISK_THRESHOLD_DAYS) return 'high'
    if (daysSinceLastTransaction > this.MEDIUM_RISK_THRESHOLD_DAYS) return 'medium'
    return 'low'
  }

  /**
   * Calculate revenue concentration analysis for a list of transactions
   * @param transactions Array of transactions to analyze
   * @returns RevenueConcentrationResult object with concentration analysis
   */
  public static calculateRevenueConcentration(transactions: Transaction[]): RevenueConcentrationResult {
    if (transactions.length === 0) {
      return {
        totalRevenue: 0,
        top5CustomersRevenue: 0,
        concentrationPercentage: 0,
        top5CustomersList: []
      }
    }

    // 1. Calculate total revenue (sum of all transaction amounts)
    const totalRevenue = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)

    // 2. Group transactions by customerId and calculate revenue per customer
    const customerRevenueMap = new Map<string, number>()
    transactions.forEach(transaction => {
      const currentRevenue = customerRevenueMap.get(transaction.customerId) || 0
      customerRevenueMap.set(transaction.customerId, currentRevenue + transaction.amount)
    })

    // 3. Convert to array and sort by revenue (highest first)
    const customerRevenueArray = Array.from(customerRevenueMap.entries())
      .map(([customerId, revenue]) => ({ customerId, revenue }))
      .sort((a, b) => b.revenue - a.revenue)

    // 4. Get top 5 customers
    const top5Customers = customerRevenueArray.slice(0, 5)

    // 5. Calculate revenue of top 5 customers
    const top5CustomersRevenue = top5Customers.reduce((sum, customer) => sum + customer.revenue, 0)

    // 6. Calculate concentration percentage
    const concentrationPercentage = totalRevenue > 0 ? (top5CustomersRevenue / totalRevenue) * 100 : 0

    return {
      totalRevenue,
      top5CustomersRevenue,
      concentrationPercentage: Math.round(concentrationPercentage * 100) / 100, // Round to 2 decimal places
      top5CustomersList: top5Customers
    }
  }
}