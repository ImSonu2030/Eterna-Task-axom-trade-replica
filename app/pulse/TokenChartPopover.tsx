"use client";

import { Token } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface TokenChartPopoverProps {
  token: Token;
}

export function TokenChartPopover({ token }: TokenChartPopoverProps) {
  return (
    <div className="flex flex-col gap-4 bg-[#1C1C1C] text-white p-4 rounded-lg w-80">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={token.imageUrl}
            alt={token.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-bold">{token.name}</div>
            <div className="text-xs text-gray-400">{token.symbol}</div>
          </div>
        </div>
        <Button variant="ghost" size="icon-sm" className="text-gray-400">
          <ExternalLink size={16} />
        </Button>
      </div>

      {/* Chart Placeholder */}
      <div className="h-40 bg-[#131313] rounded-md flex items-center justify-center">
        <p className="text-gray-500 text-sm">(Chart Placeholder)</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <div className="text-gray-400">Market Cap</div>
          <div>${token.marketCap.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400">Volume (24h)</div>
          <div>${token.volume24h.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400">Liquidity</div>
          <div>{token.stats.liquidity}</div>
        </div>
        <div>
          <div className="text-gray-400">Transactions</div>
          <div>{token.transactions}</div>
        </div>
      </div>
    </div>
  );
}