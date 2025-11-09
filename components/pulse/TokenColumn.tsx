import { Token } from "@/lib/types"; 
import React from "react";

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

      <div className="flex flex-col divide-y divide-gray-700/50">
        <div className="p-4 text-gray-400">
          Token data will be mapped here...
        </div>
      </div>
    </div>
  );
}