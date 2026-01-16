import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import './$wallet.css'

export const Route = createFileRoute('/portfolio/$wallet')({
  component: PortfolioComponent,
})

function PortfolioComponent() {
  const { wallet } = Route.useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [positions, setPositions] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading positions
    const loadPositions = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Here you would fetch the actual DLMM positions for the wallet
        // For now, we'll simulate a delay and show mock data
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Mock data - in a real implementation, this would come from an API
        const mockPositions = [
          {
            id: '1',
            pool: 'SOL-USDC',
            range: '1.5% - 2.5%',
            deposited: '1000 USDC',
            current: '1050 USDC',
            pnl: '+50 USDC (+5%)',
          },
          {
            id: '2',
            pool: 'BONK-SOL',
            range: '3% - 8%',
            deposited: '50 SOL',
            current: '48 SOL',
            pnl: '-2 SOL (-4%)',
          },
        ]

        setPositions(mockPositions)
      } catch (err) {
        setError('Failed to load positions. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    loadPositions()
  }, [wallet])

  if (isLoading) {
    return (
      <div className="portfolio-container">
        <h1>Portfolio for {wallet}</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading positions...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="portfolio-container">
        <h1>Portfolio for {wallet}</h1>
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio-container">
      <h1>Portfolio for {wallet}</h1>

      {positions.length === 0 ? (
        <div className="no-positions">
          <p>No DLMM positions found for this wallet.</p>
          <p className="hint">Make sure the wallet address is correct and try again.</p>
        </div>
      ) : (
        <div className="positions-grid">
          {positions.map((position) => (
            <div key={position.id} className="position-card">
              <h3>{position.pool}</h3>
              <div className="position-details">
                <div className="detail-item">
                  <span className="label">Range:</span>
                  <span className="value">{position.range}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Deposited:</span>
                  <span className="value">{position.deposited}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Current Value:</span>
                  <span className="value">{position.current}</span>
                </div>
                <div className="detail-item">
                  <span className="label">P&L:</span>
                  <span className={`value ${position.pnl.startsWith('+') ? 'positive' : 'negative'}`}>
                    {position.pnl}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}