// lib/dummyData.ts
import { Token } from "./types";

export const MOCK_NEW_PAIRS: Token[] = [
  {
    id: "blm3",
    name: "BLM3",
    symbol: "Bob...",
    imageUrl: "/placeholder-ps2.jpg",
    pairAddress: "2B1v...pump",
    marketCap: 4450,
    volume24h: 628,
    priceChange: 0.012,
    transactions: 6,
    creationTime: Date.now() - 11 * 1000, // <-- FIX
    buyAmount: 0,
    stats: { buys: 1, sells: 0, holders: 0, liquidity: "0/2" },
    priceHistory: { m5: 0, h1: 0, h6: 15, h24: 0 },
  },
  {
    id: "runner",
    name: "runner",
    symbol: "whe...",
    imageUrl: "/placeholder-runner.jpg",
    pairAddress: "92G5...pump",
    marketCap: 5610,
    volume24h: 1000,
    priceChange: 0.014,
    transactions: 66,
    creationTime: Date.now() - 14 * 1000, // <-- FIX
    buyAmount: 0,
    stats: { buys: 28, sells: 5, holders: 0, liquidity: "0/4" },
    priceHistory: { m5: 11, h1: 0, h6: 32, h24: 6 },
  },
];

export const MOCK_FINAL_STRETCH: Token[] = [
  {
    id: "eljefe",
    name: "El Jefe",
    symbol: "Jefe",
    imageUrl: "/placeholder-runner.jpg",
    pairAddress: "DbN2...pump",
    marketCap: 25000,
    volume24h: 13000,
    priceChange: 0.0,
    transactions: 12,
    creationTime: Date.now() - 12 * 3600 * 1000, // <-- FIX
    buyAmount: 0,
    stats: { buys: 44, sells: 28, holders: 10, liquidity: "50/50" },
    priceHistory: { m5: 28, h1: 52, h6: 52, h24: 0 },
  },
];

export const MOCK_MIGRATED: Token[] = [
  {
    id: "tiktok",
    name: "TikTok",
    symbol: "Tik...",
    imageUrl: "/placeholder-ps2.jpg",
    pairAddress: "P2bE...pump",
    marketCap: 318000,
    volume24h: 88000,
    priceChange: 0.0,
    transactions: 78,
    creationTime: Date.now() - 3 * 24 * 3600 * 1000, // <-- FIX
    buyAmount: 0,
    stats: { buys: 76, sells: 28, holders: 60, liquidity: "28/28" },
    priceHistory: { m5: 0, h1: 0, h6: 0, h24: 0 },
  },
];