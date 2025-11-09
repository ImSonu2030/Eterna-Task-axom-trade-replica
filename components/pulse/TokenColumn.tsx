// components/pulse/TokenColumn.tsx
import { Token } from "@/lib/types"; // We'll use this soon
import React from "react";

interface TokenColumnProps {
  title: string;
  tokens: Token[]; // We'll pass mock data here
}

// We will import TokenRow soon
// import { TokenRow } from "./TokenRow";

export function TokenColumn({ title, tokens }: TokenColumnProps) {
  return (
    // The main column container
    <div className="flex flex-col bg-[#1C1C1C] rounded-lg border border-gray-700/50">
      {/* Column Header */}
      <div className="p-4 border-b border-gray-700/50">
        <h2 className="text-white font-semibold">{title}</h2>
        {/* We will add the P1, P2, P3 buttons later */}
      </div>

      {/* Column Body - List of Tokens */}
      <div className="flex flex-col divide-y divide-gray-700/50">
        {/* We will map over the tokens here later:
          {tokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        */}

        {/* For now, let's just show a placeholder */}
        <div className="p-4 text-gray-400">
          Token data will be mapped here...
        </div>
      </div>
    </div>
  );
}