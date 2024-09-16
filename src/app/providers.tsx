"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { berachainTestnetbArtio } from "viem/chains";
import { createConfig, WagmiProvider } from "wagmi";
import { injected, safe } from "wagmi/connectors";

const connector = safe({
  allowedDomains: [/safe.berachain.com$/],
  debug: true,
});

export const config = createConfig({
  chains: [berachainTestnetbArtio],
  connectors: [connector, injected()],
  transports: {
    [berachainTestnetbArtio.id]: http(),
  },
});

export const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
