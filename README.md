# Counter dApp with OnchainKit & Foundry

A full-stack Web3 application demonstrating smart contract interaction with wallet connectivity. Built with Next.js, OnchainKit, Wagmi, and Foundry.

## 🚀 Features

- **Smart Contract**: Simple Counter contract with increment and setNumber functions
- **Wallet Integration**: Support for MetaMask (injected) and WalletConnect
- **Modern Stack**: Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Web3 Libraries**: OnchainKit, Wagmi, Viem for blockchain interactions
- **Development Tools**: Foundry for smart contract development and testing

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main Counter dApp interface
│   ├── layout.tsx         # Root layout with providers
│   ├── rootProvider.tsx   # Web3 providers setup
│   ├── wagmi.ts          # Wagmi configuration
│   └── globals.css       # Global styles
├── src/                   # Smart contracts
│   └── Counter.sol        # Counter contract
├── script/                # Deployment scripts
│   └── Counter.s.sol      # Counter deployment script
├── test/                  # Smart contract tests
│   └── Counter.t.sol      # Counter test suite
├── abi/                   # Contract ABIs
│   └── counterAbi.json    # Counter contract ABI
└── public/                # Static assets
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **OnchainKit** - Coinbase's Web3 UI components
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum
- **TanStack Query** - Data fetching and caching

### Smart Contracts

- **Foundry** - Ethereum development toolkit
- **Solidity ^0.8.13** - Smart contract language
- **Forge** - Testing framework
- **Anvil** - Local blockchain

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Foundry (for smart contract development)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd basebuild
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Foundry** (if not already installed)

   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add the following to `.env.local`:

   ```env
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
   ```

### Development

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **In a separate terminal, start Anvil (local blockchain)**

   ```bash
   anvil
   ```

3. **Deploy the Counter contract**

   ```bash
   forge script script/Counter.s.sol:CounterScript --rpc-url http://localhost:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --broadcast
   ```

4. **Update contract address**

   - Copy the deployed contract address from the deployment output
   - Update the `defaultAddress` in `app/page.tsx` with your deployed contract address

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Connect your wallet and interact with the Counter contract

## 📝 Smart Contract Development

### Build Contracts

```bash
forge build
```

### Run Tests

```bash
forge test
```

### Run Tests with Verbose Output

```bash
forge test -vvv
```

### Format Code

```bash
forge fmt
```

### Gas Snapshots

```bash
forge snapshot
```

### Deploy to Local Network

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url http://localhost:8545 --private-key <your_private_key> --broadcast
```

### Deploy to Testnet

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url <testnet_rpc_url> --private-key <your_private_key> --broadcast --verify
```

## 🧪 Testing

The project includes comprehensive tests for the Counter contract:

- **Unit Tests**: Basic functionality testing
- **Fuzz Tests**: Property-based testing for edge cases
- **Integration Tests**: End-to-end contract interaction

Run tests with:

```bash
forge test
```

## 🔧 Configuration

### Foundry Configuration (`foundry.toml`)

- Source directory: `src/`
- Output directory: `out/`
- Libraries: `node_modules`, `lib`

### Next.js Configuration (`next.config.ts`)

- Webpack externals configured for Foundry compatibility
- Optimized for blockchain development

## 📚 Documentation

- [Foundry Book](https://book.getfoundry.sh/)
- [OnchainKit Documentation](https://docs.onchainkit.xyz/)
- [Wagmi Documentation](https://wagmi.sh/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
