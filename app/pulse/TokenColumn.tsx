// components/pulse/TokenColumn.tsx
import { Token } from "@/lib/types";
import React from "react";
import { TokenRow } from "./TokenRow"; // <-- IMPORT IT

interface TokenColumnProps {
  title: string;
  tokens: Token[];
}

export function TokenColumn({ title, tokens }: TokenColumnProps) {
  return (
    <div className="flex flex-col bg-[#1C1C1C] rounded-lg border border-gray-700/50">
      <div className="p-4 border-b border-gray-700/50">
        <h2 className="text-white font-semibold">{title}</h2>
      </div>

      {/* UPDATE THIS PART */}
      <div className="flex flex-col divide-y divide-gray-700/50">
        {tokens.length > 0 ? (
          tokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))
        ) : (
          <div className="p-4 text-gray-400 text-sm">
            No new pairs found.
          </div>
        )}
      </div>
    </div>
  );
}