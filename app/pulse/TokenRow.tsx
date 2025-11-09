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
} from "@/components/ui/popover";
import { TokenChartPopover } from "./TokenChartPopover";
import { RootState } from "@/lib/store/store"; // <-- 1. IMPORT
import { useDispatch, useSelector } from "react-redux"; // <-- 2. IMPORT
import { useEffect, useState } from "react"; // <-- 3. IMPORT
import { clearJustUpdated } from "@/lib/store/pulseSlice"; // <-- 4. IMPORT
import { cn } from "@/lib/utils"; // <-- 5. IMPORT cn (for classnames)

interface TokenRowProps {
  token: Token;
}

export function TokenRow({ token }: TokenRowProps) {
  const dispatch = useDispatch();
  // 6. Get the ID of the token that was just updated
  const justUpdatedTokenId = useSelector(
    (state: RootState) => state.pulse.justUpdatedTokenId
  );
  
  // 7. Local state to control the flash
  const [isFlashing, setIsFlashing] = useState(false);

  // 8. Effect to trigger the flash
  useEffect(() => {
    if (justUpdatedTokenId === token.id) {
      setIsFlashing(true);
      // After the flash, dispatch action to clear the ID
      // and remove the flash class
      const timer = setTimeout(() => {
        setIsFlashing(false);
        dispatch(clearJustUpdated());
      }, 500); // Flash duration

      return () => clearTimeout(timer);
    }
  }, [justUpdatedTokenId, token.id, dispatch]);

  const formatMarketCap = (num: number) => {
    if (num > 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num > 1_000) return `$${(num / 1_000).toFixed(1)}K`;
    return `$${num.toFixed(0)}`; // Format to 0 decimals for updates
  };

  const formatTimeAgo = (timestamp: number) => { // <-- 1. Change 'date: Date' to 'timestamp: number'
    const seconds = Math.floor((Date.now() - timestamp) / 1000); // <-- 2. Use 'Date.now()' and 'timestamp'
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Popover>
        {/* 9. Apply dynamic classes for the flash effect */}
        <div
          className={cn(
            "p-4 bg-[#131313] hover:bg-[#202020] transition-colors duration-500",
            isFlashing && "bg-blue-500/20" // The "flash" class
          )}
        >
          {/* ... (rest of the component is identical) ... */}
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
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
                <PopoverTrigger asChild>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-bold">{token.name}</span>
                      <span className="text-gray-400 text-sm">{token.symbol}</span>
                    </div>
                    <div className="text-gray-500 text-xs mb-1">{token.pairAddress}</div>
                  </div>
                </PopoverTrigger>
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
            <div className="text-right">
              {/* 10. Apply dynamic classes for MC flash */}
              <div className={cn(
                "text-white font-bold transition-colors duration-500",
                isFlashing && "text-blue-300"
              )}>
                {formatMarketCap(token.marketCap)}
              </div>
              <div className="text-gray-400 text-sm">V ${formatMarketCap(token.volume24h)}</div>
              <div className="text-xs text-gray-500">
                F {token.priceChange} TX {token.transactions}
              </div>
            </div>
          </div>
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
        <PopoverContent className="p-0 border-0 bg-transparent">
          <TokenChartPopover token={token} />
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}