import { AnalysisService, Transaction, CustomerActivity } from '../AnalysisService'

// Mock data helper function
const createMockTransaction = (
  customerId: string,
  amount: number,
  daysAgo: number,
  businessId: string = 'business-1',
  currentDate: Date = new Date('2024-01-15T00:00:00.000Z')
): Transaction => {
  const date = new Date(currentDate)
  date.setDate(date.getDate() - daysAgo)
  
  return {
    id: `transaction-${customerId}-${daysAgo}`,
    customerId,
    amount,
    date,
    businessId,
    description: `Transaction for ${customerId}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

describe('AnalysisService', () => {
  describe('calculateChurnRisk', () => {
    const mockCurrentDate = new Date('2024-01-15T00:00:00.000Z')

    it('should return empty analysis when no transactions are provided', () => {
      const result = AnalysisService.calculateChurnRisk([], mockCurrentDate)

      expect(result).toEqual({
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
      })
    })

    it('should NOT classify a customer with 30 days since last purchase as at risk', () => {
      const transactions = [
        createMockTransaction('customer-1', 100, 30, 'business-1', mockCurrentDate), // 30 days ago
        createMockTransaction('customer-1', 50, 60, 'business-1', mockCurrentDate)    // Older transaction
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(1)
      expect(result.atRiskCustomersCount).toBe(0)
      expect(result.atRiskCustomersList).toHaveLength(0)
      expect(result.metrics.churnRate).toBe('0.0')
      expect(result.metrics.riskDistribution.healthy).toBe(1) // 30 days is healthy (< 30 threshold)
      expect(result.metrics.riskDistribution.low).toBe(0)
    })

    it('should classify a customer with 100 days since last purchase as at risk', () => {
      const transactions = [
        createMockTransaction('customer-1', 200, 100, 'business-1', mockCurrentDate), // 100 days ago
        createMockTransaction('customer-1', 150, 120, 'business-1', mockCurrentDate)  // Older transaction
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(1)
      expect(result.atRiskCustomersCount).toBe(1)
      expect(result.atRiskCustomersList).toHaveLength(1)
      expect(result.atRiskCustomersList[0].customerId).toBe('customer-1')
      expect(result.atRiskCustomersList[0].daysSinceLastTransaction).toBe(100)
      expect(result.atRiskCustomersList[0].riskLevel).toBe('medium')
      expect(result.metrics.churnRate).toBe('100.0')
    })

    it('should correctly calculate churn count with mixed customer scenarios', () => {
      const transactions = [
        // Customer 1: 25 days ago (healthy)
        createMockTransaction('customer-1', 100, 25, 'business-1', mockCurrentDate),
        
        // Customer 2: 45 days ago (low risk)
        createMockTransaction('customer-2', 200, 45, 'business-1', mockCurrentDate),
        
        // Customer 3: 95 days ago (at risk - medium)
        createMockTransaction('customer-3', 150, 95, 'business-1', mockCurrentDate),
        
        // Customer 4: 200 days ago (at risk - high)
        createMockTransaction('customer-4', 300, 200, 'business-1', mockCurrentDate),
        
        // Customer 5: 15 days ago (healthy)
        createMockTransaction('customer-5', 50, 15, 'business-1', mockCurrentDate)
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(5)
      expect(result.atRiskCustomersCount).toBe(2) // customers 3 and 4
      expect(result.metrics.churnRate).toBe('40.0') // 2 out of 5 = 40%
      
      // Check risk distribution
      expect(result.metrics.riskDistribution.healthy).toBe(2) // customers 1, 5 (<= 30 days)
      expect(result.metrics.riskDistribution.low).toBe(1)     // customer 2 (30-90 days)
      expect(result.metrics.riskDistribution.medium).toBe(1)  // customer 3 (90-180 days)
      expect(result.metrics.riskDistribution.high).toBe(1)    // customer 4 (> 180 days)
    })

    it('should handle multiple transactions per customer correctly', () => {
      const transactions = [
        // Customer 1: Multiple transactions, most recent 50 days ago
        createMockTransaction('customer-1', 100, 50, 'business-1', mockCurrentDate),
        createMockTransaction('customer-1', 75, 80, 'business-1', mockCurrentDate),
        createMockTransaction('customer-1', 200, 120, 'business-1', mockCurrentDate),
        
        // Customer 2: Multiple transactions, most recent 120 days ago (at risk)
        createMockTransaction('customer-2', 150, 120, 'business-1', mockCurrentDate),
        createMockTransaction('customer-2', 100, 150, 'business-1', mockCurrentDate),
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(2)
      expect(result.atRiskCustomersCount).toBe(1) // Only customer 2

      // Check customer 1 (not at risk)
      const customer1InAtRisk = result.atRiskCustomersList.find(c => c.customerId === 'customer-1')
      expect(customer1InAtRisk).toBeUndefined()

      // Check customer 2 (at risk)
      const customer2InAtRisk = result.atRiskCustomersList.find(c => c.customerId === 'customer-2')
      expect(customer2InAtRisk).toBeDefined()
      expect(customer2InAtRisk?.daysSinceLastTransaction).toBe(120)
      expect(customer2InAtRisk?.totalTransactions).toBe(2)
      expect(customer2InAtRisk?.totalAmount).toBe(250)
    })

    it('should calculate financial metrics correctly', () => {
      const transactions = [
        createMockTransaction('customer-1', 100, 30, 'business-1', mockCurrentDate),  // Not at risk
        createMockTransaction('customer-2', 200, 100, 'business-1', mockCurrentDate), // At risk
        createMockTransaction('customer-3', 50, 150, 'business-1', mockCurrentDate),  // At risk
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.metrics.totalRevenue).toBe(350)
      expect(result.metrics.atRiskRevenue).toBe(250) // customers 2 and 3
      expect(result.metrics.averageTransactionValue).toBe(350 / 3)
    })

    it('should generate correct insights', () => {
      const transactions = [
        createMockTransaction('customer-1', 100, 30, 'business-1', mockCurrentDate),  // Top revenue customer
        createMockTransaction('customer-1', 400, 50, 'business-1', mockCurrentDate),  
        createMockTransaction('customer-2', 200, 100, 'business-1', mockCurrentDate), // Most at risk
        createMockTransaction('customer-3', 50, 80, 'business-1', mockCurrentDate),
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      // Most at risk customer should be the one with most days since last transaction
      expect(result.insights.mostAtRiskCustomer?.customerId).toBe('customer-2')
      expect(result.insights.mostAtRiskCustomer?.daysSinceLastTransaction).toBe(100)

      // Top customer by revenue should be customer-1
      expect(result.insights.topCustomerByRevenue.customerId).toBe('customer-1')
      expect(result.insights.topCustomerByRevenue.totalAmount).toBe(500)

      // Recent transactions should be ordered by date (most recent first)
      expect(result.insights.recentTransactions).toHaveLength(4)
      expect(result.insights.recentTransactions[0].customerId).toBe('customer-1') // 30 days ago
      expect(result.insights.recentTransactions[1].customerId).toBe('customer-1') // 50 days ago
    })

    it('should correctly classify risk levels', () => {
      const transactions = [
        createMockTransaction('customer-healthy', 100, 15, 'business-1', mockCurrentDate),   // 15 days - healthy
        createMockTransaction('customer-low', 200, 60, 'business-1', mockCurrentDate),      // 60 days - low risk
        createMockTransaction('customer-medium', 150, 120, 'business-1', mockCurrentDate),  // 120 days - medium risk  
        createMockTransaction('customer-high', 300, 200, 'business-1', mockCurrentDate),    // 200 days - high risk
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      const riskLevels = result.atRiskCustomersList.reduce((acc, customer) => {
        acc[customer.riskLevel] = (acc[customer.riskLevel] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      expect(result.metrics.riskDistribution.healthy).toBe(1)
      expect(result.metrics.riskDistribution.low).toBe(1)
      expect(result.metrics.riskDistribution.medium).toBe(1)
      expect(result.metrics.riskDistribution.high).toBe(1)
      
      // Only medium and high risk should be in the at-risk list
      expect(result.atRiskCustomersCount).toBe(2)
      expect(riskLevels.medium).toBe(1)
      expect(riskLevels.high).toBe(1)
    })

    it('should handle edge case with exact threshold days', () => {
      const transactions = [
        createMockTransaction('customer-1', 100, 90, 'business-1', mockCurrentDate),  // Exactly 90 days (threshold)
        createMockTransaction('customer-2', 200, 89, 'business-1', mockCurrentDate),  // 89 days (just below threshold)
      ]

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(2)
      expect(result.atRiskCustomersCount).toBe(1) // Only customer-1 (90 days >= 90 threshold)
      
      const atRiskCustomer = result.atRiskCustomersList.find(c => c.customerId === 'customer-1')
      expect(atRiskCustomer).toBeDefined()
      expect(atRiskCustomer?.daysSinceLastTransaction).toBe(90)
    })

    it('should limit at-risk customers list to 20 items', () => {
      // Create 25 at-risk customers (all with >90 days)
      const transactions: Transaction[] = []
      for (let i = 1; i <= 25; i++) {
        transactions.push(createMockTransaction(`customer-${i}`, 100, 100 + i, 'business-1', mockCurrentDate))
      }

      const result = AnalysisService.calculateChurnRisk(transactions, mockCurrentDate)

      expect(result.totalCustomers).toBe(25)
      expect(result.atRiskCustomersCount).toBe(25)
      expect(result.atRiskCustomersList).toHaveLength(20) // Should be limited to 20
      
      // Should be sorted by days since last transaction (descending)
      for (let i = 0; i < result.atRiskCustomersList.length - 1; i++) {
        expect(result.atRiskCustomersList[i].daysSinceLastTransaction)
          .toBeGreaterThanOrEqual(result.atRiskCustomersList[i + 1].daysSinceLastTransaction)
      }
    })
  })
})