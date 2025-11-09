"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToken, updateToken } from "./pulseSlice";
import { RootState } from "./store";
import { Token } from "@/lib/types";

const createMockToken = (): Token => {
  const id = `token_${Math.floor(Math.random() * 10000)}`;
  return {
    id: id,
    name: "NEW MOCK",
    symbol: "MOK",
    imageUrl: "/file.svg",
    pairAddress: `${id.slice(0, 4)}...pump`,
    marketCap: Math.floor(Math.random() * 5000) + 1000,
    volume24h: Math.floor(Math.random() * 1000),
    priceChange: (Math.random() - 0.5) * 0.1,
    transactions: Math.floor(Math.random() * 50),
    creationTime: Date.now(), 
    buyAmount: 0,
    stats: { buys: 1, sells: 0, holders: 1, liquidity: "0/1" },
    priceHistory: { m5: 0, h1: 0, h6: 0, h24: 0 },
  };
};

export function useMockWebSocket() {
  const dispatch = useDispatch();
  const newPairs = useSelector((state: RootState) => state.pulse.newPairs);

  useEffect(() => {
    if (newPairs.length === 0) return;

    const updateInterval = setInterval(() => {
      const randomToken = newPairs[Math.floor(Math.random() * newPairs.length)];
      if (randomToken) {
        const newMarketCap =
          randomToken.marketCap + (Math.random() - 0.5) * 500;
        
        dispatch(
          updateToken({
            id: randomToken.id,
            newMarketCap: Math.max(newMarketCap, 500), 
          })
        );
      }
    }, 2000); 

    const newInterval = setInterval(() => {
      const newToken = createMockToken();
      dispatch(addToken(newToken));
    }, 10000);

    return () => {
      clearInterval(updateInterval);
      clearInterval(newInterval);
    };
  }, [dispatch, newPairs]); 
}