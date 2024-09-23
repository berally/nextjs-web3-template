'use client';

import { http, createStorage, cookieStorage } from 'wagmi'
import { berachainTestnetbArtio } from "viem/chains";
import { Chain} from '@rainbow-me/rainbowkit'
import { createConfig} from "wagmi";
import { injected, safe } from "wagmi/connectors"; /** Config Safe Apps */

const supportedChains: Chain[] = [berachainTestnetbArtio];

export const config = createConfig({
    chains: supportedChains as any,
    connectors: [safe(), injected()],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
});