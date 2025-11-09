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
    creationTime: new Date(Date.now() - 11 * 1000),
    buyAmount: 0,
    stats: {
      buys: 1,
      sells: 0,
      holders: 0,
      liquidity: "0/2",
    },
    priceHistory: {
      m5: 0,
      h1: 0,
      h6: 15,
      h24: 0,
    },
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
    creationTime: new Date(Date.now() - 14 * 1000),
    buyAmount: 0,
    stats: {
      buys: 28,
      sells: 5,
      holders: 0,
      liquidity: "0/4",
    },
    priceHistory: {
      m5: 11,
      h1: 0,
      h6: 32,
      h24: 6,
    },
  },
];