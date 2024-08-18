import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { arbitrum, assetChainTestnet, avalanche, mainnet, polygon, polygonMumbai, sepolia } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
export const projectId = '8a7569331972bab114ec03ee72409d6c';

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
    name: 'Realix',
    description: 'Connect to Realix DApp',
    url: 'http://localhost:3000', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [assetChainTestnet, polygonMumbai, sepolia];
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
})