// app/pulse/TokenRow.tsx
import { Token } from "@/lib/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Users, Database } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // <-- 1. IMPORT POPOVER
import { TokenChartPopover } from "./TokenChartPopover"; // <-- 2. IMPORT OUR NEW COMPONENT

interface TokenRowProps {
  token: Token;
}

export function TokenRow({ token }: TokenRowProps) {
  const formatMarketCap = (num: number) => {
    if (num > 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num > 1_000) return `$${(num / 1_000).toFixed(1)}K`;
    return `$${num}`;
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  return (
    <TooltipProvider delayDuration={100}>
      {/* 3. WRAP THE ROW IN THE POPOVER COMPONENT */}
      <Popover>
        <div className="p-4 bg-[#131313] hover:bg-[#202020] transition-colors">
          <div className="flex justify-between items-start mb-2">
            {/* Left Side: Token Info */}
            <div className="flex gap-3">
              {/* 4. MAKE IMAGE THE TRIGGER */}
              <PopoverTrigger asChild>
                <Image
                  src={token.imageUrl}
                  alt={token.name}
                  width={48}
                  height={48}
                  className="rounded-full cursor-pointer"
                />
              </PopoverTrigger>
              <div>
                {/* 5. MAKE TEXT THE TRIGGER */}
                <PopoverTrigger asChild>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-bold">{token.name}</span>
                      <span className="text-gray-400 text-sm">{token.symbol}</span>
                    </div>
                    <div className="text-gray-500 text-xs mb-1">{token.pairAddress}</div>
                  </div>
                </PopoverTrigger>

                {/* Stats Icons (with Tooltips) */}
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{formatTimeAgo(token.creationTime)}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Created at: {token.creationTime.toLocaleString()}</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{token.stats.buys}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{token.stats.buys} Buys</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1">
                        <Database size={12} />
                        <span>{token.stats.sells}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{token.stats.sells} Sells</p>
                    </TooltipContent>
                  </Tooltip>
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

          {/* Bottom Part */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-xs text-gray-500">
              <span>5m <span className="text-green-500">{token.priceHistory.m5}%</span></span>
              <span>1h <span className="text-red-500">{token.priceHistory.h1}%</span></span>
              <span>6h <span className="text-gray-500">{token.priceHistory.h6}%</span></span>
            </div>
            <Button size="sm" className="bg-[#5865F2] hover:bg-[#4a56d1] text-white rounded-md px-4">
              {token.buyAmount} SOL
            </Button>
          </div>
        </div>
        
        {/* 6. DEFINE THE POPOVER CONTENT */}
        <PopoverContent className="p-0 border-0 bg-transparent">
          <TokenChartPopover token={token} />
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}