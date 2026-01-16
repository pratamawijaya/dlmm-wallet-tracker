import { Position, PortfolioSummary } from '@/types/position'

/**
 * Extract numeric value from a string like "1000 USDC" or "+50 USDC (+5%)"
 */
export function extractNumericValue(str: string): number {
  // Remove currency symbols and extract the first number
  const match = str.match(/[-+]?\d*\.?\d+/)
  if (!match) return 0
  return parseFloat(match[0])
}

/**
 * Extract P&L percentage from a P&L string like "+50 USDC (+5%)"
 */
export function extractPnlPercentage(pnlString: string): number {
  const match = pnlString.match(/\(([-+]?\d*\.?\d+)%\)/)
  if (!match) return 0
  return parseFloat(match[1])
}

/**
 * Parse position data to extract numeric values
 */
export function parsePosition(position: Position): Position {
  const depositedValue = extractNumericValue(position.deposited)
  const currentValue = extractNumericValue(position.current)
  const pnlValue = extractNumericValue(position.pnl.split(' ')[0])
  const pnlPercentage = extractPnlPercentage(position.pnl)

  return {
    ...position,
    depositedValue,
    currentValue,
    pnlValue,
    pnlPercentage
  }
}

/**
 * Calculate portfolio summary from positions
 */
export function calculatePortfolioSummary(positions: Position[]): PortfolioSummary {
  if (positions.length === 0) {
    return {
      totalValue: 0,
      totalPnl: 0,
      totalPnlPercentage: 0,
      totalPositions: 0
    }
  }

  // Parse all positions to get numeric values
  const parsedPositions = positions.map(parsePosition)

  // Calculate totals
  const totalValue = parsedPositions.reduce((sum, pos) => sum + pos.currentValue, 0)
  const totalDeposited = parsedPositions.reduce((sum, pos) => sum + pos.depositedValue, 0)
  const totalPnl = totalValue - totalDeposited
  const totalPnlPercentage = totalDeposited > 0 ? (totalPnl / totalDeposited) * 100 : 0

  return {
    totalValue,
    totalPnl,
    totalPnlPercentage,
    totalPositions: positions.length
  }
}

/**
 * Format currency value
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}