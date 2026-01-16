import { createFileRoute } from '@tanstack/react-router'
import WalletInput from '@/components/WalletInput'
import '../App.css'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="App">
      <header className="App-header">
        <h1>DLMM Wallet Tracker</h1>
        <p className="subtitle">Track your Meteora DLMM positions on Solana</p>

        <WalletInput />

        <div className="description">
          <p>Enter any Solana wallet address to view DLMM positions</p>
          <p>No wallet connection required</p>
        </div>
      </header>
    </div>
  ),
})
