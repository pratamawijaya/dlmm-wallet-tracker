# DLMM Wallet Tracker - Product Requirements Document

## Product Overview
A web-based application that tracks DLMM (Dynamic Liquidity Market Making) positions across Meteora protocol for specified Solana wallets, providing comprehensive position analytics and performance visualization.

## Target Users
- DeFi yield farmers and liquidity providers
- Portfolio managers tracking DLMM strategies
- Traders monitoring LP performance
- Researchers analyzing DeFi liquidity patterns

## Core Features

### 1. Wallet Management
- **Manual wallet entry**: Text input field for Solana wallet addresses
- **Multiple wallet support**: Track up to 20 wallets simultaneously
- **Wallet validation**: Real-time Solana address validation
- **Nickname assignment**: Custom names for tracked wallets

### 2. Position Data Display
**Real-time position information:**
- Active DLMM positions with exact pool locations
- Liquidity amounts (total, per asset, concentration ranges)
- Current P&L (realized and unrealized)
- Position open/close timestamps
- Strategy parameters (bin width, price ranges)
- Associated transaction history for each position

**Historical tracking:**
- Closed positions archive
- Performance over time
- P&L calculation including fees earned

### 3. Auto-refresh System
- **5-minute refresh intervals** (your requirement 4C)
- Manual refresh option
- Visual indicator of last update time
- Progress bar during data fetching
- Option to pause auto-refresh

### 4. Strategy Visualization
- **Bar charts** (your requirement 5A) showing:
  - Position size comparison
  - P&L performance by wallet/position
  - Liquidity allocation across assets
  - Strategy concentration (wide vs narrow ranges)

**Additional visual elements:**
- Color-coded performance indicators (green/red for profit/loss)
- Responsive bar chart with hover details
- Sortable chart views (by P&L, size, age)

### 5. User Interface
**Web application design:**
- Clean dashboard layout
- Mobile-responsive design
- Dark/light mode toggle
- Professional DeFi-style interface
- Real-time data indicators

**Data presentation:**
- Table format for position details
- Expandable rows for full transaction history
- Filtering/sorting capabilities
- Export functionality (CSV, JSON)

## Technical Specifications

### Frontend Requirements
- React.js with TypeScript
- Chart.js for bar chart visualizations
- Tailwind CSS for styling
- WebSocket support for real-time updates

### Data Sources & APIs
- Meteora DLMM SDK
- Solana RPC endpoints
- Jupiter API for pricing data
- Custom indexing service for historical data

### Backend Requirements
- Node.js server with Express
- Caching layer (Redis) for performance
- Database (PostgreSQL) for historical data
- Job scheduler for refresh intervals

### Integration Points
- **Solana blockchain**: Direct RPC calls via @solana/web3.js
- **Meteora protocol**: Official DLMM SDK integration
- **Token pricing**: Multiple DEX aggregators for accurate P&L
- **Transaction history**: Solana transaction parsing

## Data Processing Pipeline

### Position Discovery
1. Poll wallet addresses for DLMM-related transactions
2. Parse transaction logs for position open/close events
3. Query current active positions from Meteora contracts
4. Calculate liquidity values and price ranges

### Performance Calculation
1. Track position entry/exit prices
2. Calculate fees earned from protocol
3. Factor in impermanent loss/gain
4. Cross-reference with current market prices
5. Generate P&L metrics in USD terms

### User Experience Flow
1. **Onboarding**: Enter wallet addresses with validation
2. **Dashboard**: Overview of all wallets and total metrics
3. **Detail View**: Drill down into specific positions
4. **Performance**: Historical charts and analytics
5. **Export**: Download position reports

## Performance Requirements
- Page load: <3 seconds for 20 wallets
- Data refresh: <30 seconds per wallet
- Chart rendering: <1 second
- Mobile optimization: All features responsive

## Security Considerations
- Input sanitization for wallet addresses
- Rate limiting to prevent API abuse
- No private key storage
- HTTPS enforcement
- Content Security Policy headers

## Future Enhancements
- Alert system for significant P&L changes
- Strategy recommendations based on performance
- Multi-protocol support (Orca, Raydium)
- Social features (share performance)
- Advanced analytics and backtesting

## Success Metrics
- User retention rate >20% after 30 days
- Average session duration >5 minutes
- Data accuracy >99% vs on-chain data
- Page load optimization score >90