"use client";

import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { useReadContract, useWriteContract } from "wagmi";
import { useState } from "react";
import counterAbi from "../abi/counterAbi.json";
import "./globals.css";

const defaultAddress = "0x8203edBA034c4F4657f63EA27C8957177588002c"; // replace with your deployed contract

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  const [contractAddress, setContractAddress] = useState(defaultAddress);

  // Counter state
  const { data: count, refetch } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: counterAbi,
    functionName: "number",
  });

  const { writeContractAsync } = useWriteContract();

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Counter — WalletConnect Demo</h1>

        {/* Contract Address Input */}
        <input
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          className="input"
          placeholder="Contract address"
        />

        {/* Wallet Connection */}
        {!isConnected ? (
          <div className="btn-group">
            <button
              onClick={() => connect({ connector: injected() })}
              className="btn primary"
            >
              Connect MetaMask (Injected)
            </button>

            <button
              onClick={() =>
                connect({
                  connector: walletConnect({
                    projectId: process.env
                      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
                  }),
                })
              }
              className="btn secondary"
            >
              Connect via WalletConnect
            </button>
          </div>
        ) : (
          <div className="connected-box">
            <p>Connected: {address}</p>
            <p>
              Balance: {balance?.formatted} {balance?.symbol}
            </p>
            <button onClick={() => disconnect()} className="btn danger">
              Disconnect
            </button>
          </div>
        )}

        {/* Contract Interaction */}
        {isConnected && (
          <div className="counter-box">
            <button onClick={() => refetch()} className="btn">
              Read number() → {count?.toString()}
            </button>

            <button
              onClick={() =>
                writeContractAsync({
                  address: contractAddress as `0x${string}`,
                  abi: counterAbi,
                  functionName: "increment",
                })
              }
              className="btn success"
            >
              Call increment()
            </button>

            <button
              onClick={() =>
                writeContractAsync({
                  address: contractAddress as `0x${string}`,
                  abi: counterAbi,
                  functionName: "setNumber",
                  args: [BigInt(42)],
                })
              }
              className="btn purple"
            >
              Set number to 42
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
