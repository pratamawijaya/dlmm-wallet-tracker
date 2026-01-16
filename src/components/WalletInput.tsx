import { useState } from 'react'
import { PublicKey } from '@solana/web3.js'
import { useNavigate } from '@tanstack/react-router'

interface WalletInputProps {
  onSubmit?: (walletAddress: string) => void
}

export default function WalletInput({ onSubmit }: WalletInputProps) {
  const [walletAddress, setWalletAddress] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const validateSolanaAddress = (address: string): boolean => {
    try {
      new PublicKey(address)
      return true
    } catch (error) {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Trim whitespace
    const trimmedAddress = walletAddress.trim()

    // Validate address format
    if (!validateSolanaAddress(trimmedAddress)) {
      setError('Invalid Solana wallet address format')
      setIsLoading(false)
      return
    }

    // If onSubmit prop is provided, use it. Otherwise navigate to the portfolio page
    if (onSubmit) {
      onSubmit(trimmedAddress)
    } else {
      // Navigate to the portfolio page
      navigate({
        to: '/portfolio/$wallet',
        params: { wallet: trimmedAddress }
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="wallet-input-container">
      <form onSubmit={handleSubmit} className="wallet-input-form">
        <div className="input-group">
          <label htmlFor="wallet-address">Wallet Address</label>
          <input
            id="wallet-address"
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter Solana wallet address (e.g., 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU)"
            className={error ? 'error' : ''}
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !walletAddress.trim()}
          className="submit-button"
        >
          {isLoading ? 'Loading...' : 'View Positions'}
        </button>
      </form>
    </div>
  )
}