"use client";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
    createConfig,
    WagmiProvider
} from 'wagmi';
import { injected , safe } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { berachainTestnetbArtio} from 'viem/chains';

const connector = safe({
    allowedDomains: [/safe.berachain.com$/],
    debug: true,
})
export const config = createConfig({
    chains: [berachainTestnetbArtio],
    connectors: [
        connector,
        injected()
    ],
    transports: {
        [berachainTestnetbArtio.id]: http(),
    },
});

export const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "60eae9ea-ff2d-43ce-918e-3364f52840d4",
                walletConnectors: [EthereumWalletConnectors]
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <DynamicWagmiConnector>
                        {children}
                    </DynamicWagmiConnector>
                </QueryClientProvider>
            </WagmiProvider>
        </DynamicContextProvider>
    );
};