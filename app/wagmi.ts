"use client";

import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [base],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!, // 👈 from WalletConnect Cloud
      metadata: {
        name: "My OnchainKit App",
        description: "Counter dApp with Wagmi",
        url: "http://localhost:3000", // or your deployed domain
        icons: ["https://avatars.githubusercontent.com/u/37784886"], // any valid icon URL
      },
      showQrModal: true, // 👈 important for QR modal popup
    }),
  ],
  transports: {
    [base.id]: http(),
  },
});
