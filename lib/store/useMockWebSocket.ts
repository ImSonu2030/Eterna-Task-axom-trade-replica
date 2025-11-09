// lib/store/useMockWebSocket.ts
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToken, updateToken } from "./pulseSlice";
import { RootState } from "./store";
import { Token } from "@/lib/types";

// ... (imports are the same)

// Helper function to create a new random token
const createMockToken = (): Token => {
  const id = `token_${Math.floor(Math.random() * 10000)}`;
  return {
    id: id,
    name: "NEW MOCK",
    symbol: "MOK",
    imageUrl: "/placeholder-runner.jpg",
    pairAddress: `${id.slice(0, 4)}...pump`,
    marketCap: Math.floor(Math.random() * 5000) + 1000,
    volume24h: Math.floor(Math.random() * 1000),
    priceChange: (Math.random() - 0.5) * 0.1,
    transactions: Math.floor(Math.random() * 50),
    creationTime: Date.now(), // <-- FIX
    buyAmount: 0,
    stats: { buys: 1, sells: 0, holders: 1, liquidity: "0/1" },
    priceHistory: { m5: 0, h1: 0, h6: 0, h24: 0 },
  };
};

export function useMockWebSocket() {
  const dispatch = useDispatch();
  // Get the current list of tokens from Redux
  const newPairs = useSelector((state: RootState) => state.pulse.newPairs);

  useEffect(() => {
    // Don't start the socket until we have initial data
    if (newPairs.length === 0) return;

    // --- MOCK PRICE UPDATE ---
    // Every 2 seconds, update a random token
    const updateInterval = setInterval(() => {
      // Pick a random token
      const randomToken = newPairs[Math.floor(Math.random() * newPairs.length)];
      if (randomToken) {
        // Generate a new random market cap
        const newMarketCap =
          randomToken.marketCap + (Math.random() - 0.5) * 500;
        
        dispatch(
          updateToken({
            id: randomToken.id,
            newMarketCap: Math.max(newMarketCap, 500), // Don't let it go below 500
          })
        );
      }
    }, 1000); // 2 seconds

    // --- MOCK NEW TOKEN ---
    // Every 10 seconds, add a new token
    const newInterval = setInterval(() => {
      const newToken = createMockToken();
      dispatch(addToken(newToken));
    }, 10000); // 10 seconds

    // Clean up intervals on component unmount
    return () => {
      clearInterval(updateInterval);
      clearInterval(newInterval);
    };
  }, [dispatch, newPairs]); // Rerun effect if newPairs changes
}