export interface Token {
  id: string;
  name: string;
  symbol: string;
  imageUrl: string;
  pairAddress: string;
  marketCap: number;
  volume24h: number;
  priceChange: number;
  transactions: number;
  creationTime: number;
  buyAmount: number;
  stats: {
    buys: number;
    sells: number;
    holders: number;
    liquidity: string;
  };
  priceHistory: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
}