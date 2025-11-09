// components/pulse/TokenRow.tsx
import { Token } from "@/lib/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, Database, BarChart2, Droplet, Zap } from "lucide-react";

interface TokenRowProps {
  token: Token;
}

export function TokenRow({ token }: TokenRowProps) {
  // Helper to format large numbers
  const formatMarketCap = (num: number) => {
    if (num > 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num > 1_000) return `$${(num / 1_000).toFixed(1)}K`;
    return `$${num}`;
  };

  return (
    // Main container for the row
    <div className="p-4 bg-[#131313] hover:bg-[#202020] transition-colors cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        {/* Left Side: Token Info */}
        <div className="flex gap-3">
          <Image
            src={token.imageUrl}
            alt={token.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-bold">{token.name}</span>
              <span className="text-gray-400 text-sm">{token.symbol}</span>
            </div>
            <div className="text-gray-500 text-xs mb-1">{token.pairAddress}</div>
            
            {/* Stats Icons */}
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{Math.floor((new Date().getTime() - token.creationTime.getTime()) / 1000)}s</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={12} />
                <span>{token.stats.buys}</span>
              </div>
              <div className="flex items-center gap-1">
                <Database size={12} />
                <span>{token.stats.sells}</span>
              </div>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>

        {/* Right Side: Price Info */}
        <div className="text-right">
          <div className="text-white font-bold">{formatMarketCap(token.marketCap)}</div>
          <div className="text-gray-400 text-sm">V ${formatMarketCap(token.volume24h)}</div>
          <div className="text-xs text-gray-500">
            F {token.priceChange} TX {token.transactions}
          </div>
        </div>
      </div>

      {/* Bottom Part: Price History Bars & Action Button */}
      <div className="flex justify-between items-center">
        {/* Price history placeholder */}
        <div className="flex gap-2 text-xs text-gray-500">
          <span>5m <span className="text-green-500">{token.priceHistory.m5}%</span></span>
          <span>1h <span className="text-red-500">{token.priceHistory.h1}%</span></span>
          <span>6h <span className="text-gray-500">{token.priceHistory.h6}%</span></span>
        </div>

        {/* Action Button (from shadcn/ui) */}
        <Button size="sm" className="bg-[#5865F2] hover:bg-[#4a56d1] text-white rounded-md px-4">
          {token.buyAmount} SOL
        </Button>
      </div>
    </div>
  );
}