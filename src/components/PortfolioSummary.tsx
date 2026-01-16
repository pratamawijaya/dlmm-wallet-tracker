import { Position, PortfolioSummary as PortfolioSummaryType } from '@/types/position'
import { calculatePortfolioSummary, formatCurrency, formatPercentage } from '@/utils/portfolioCalculations'
import './PortfolioSummary.css'

interface PortfolioSummaryProps {
  positions: Position[]
  className?: string
}

export default function PortfolioSummary({ positions, className = '' }: PortfolioSummaryProps) {
  const summary = calculatePortfolioSummary(positions)

  return (
    <div className={`portfolio-summary ${className}`}>
      <div className="summary-card">
        <div className="summary-item">
          <span className="summary-label">Total Value</span>
          <span className="summary-value total-value">
            {formatCurrency(summary.totalValue)}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Total P&L</span>
          <span className={`summary-value pnl-value ${summary.totalPnl >= 0 ? 'positive' : 'negative'}`}>
            {formatCurrency(summary.totalPnl)}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">P&L Percentage</span>
          <span className={`summary-value pnl-percentage ${summary.totalPnlPercentage >= 0 ? 'positive' : 'negative'}`}>
            {formatPercentage(summary.totalPnlPercentage)}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Active Positions</span>
          <span className="summary-value positions-count">
            {summary.totalPositions}
          </span>
        </div>
      </div>
    </div>
  )
}