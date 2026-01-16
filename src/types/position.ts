export interface Position {
  id: string
  pool: string
  range: string
  deposited: string
  current: string
  pnl: string
  depositedValue?: number
  currentValue?: number
  pnlValue?: number
  pnlPercentage?: number
}

export interface PortfolioSummary {
  totalValue: number
  totalPnl: number
  totalPnlPercentage: number
  totalPositions: number
}

export interface PositionFilter {
  pool?: string
  minPnl?: number
  maxPnl?: number
  showProfitableOnly?: boolean
  showLossOnly?: boolean
}