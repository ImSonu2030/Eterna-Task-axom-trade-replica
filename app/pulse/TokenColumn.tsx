"use client"; 

import React from "react";
import { useSelector } from "react-redux"; 
import { RootState } from "@/lib/store/store"; 
import { Token } from "@/lib/types";
import { TokenRow } from "./TokenRow";
import { TokenRowSkeleton } from "./TokenRowSkeleton";

interface TokenColumnProps {
  title: string;
}

export function TokenColumn({ title }: TokenColumnProps) {
  
  const { tokens, isLoading } = useSelector((state: RootState) => {
    if (title === "New Pairs") {
      return { tokens: state.pulse.newPairs, isLoading: state.pulse.isLoading };
    }
    if (title === "Final Stretch") {
      return { tokens: state.pulse.finalStretch, isLoading: state.pulse.isLoading };
    }
    if (title === "Migrated") {
      return { tokens: state.pulse.migrated, isLoading: state.pulse.isLoading };
    }
    return { tokens: [], isLoading: state.pulse.isLoading };
  });

  return (
    <div className="flex flex-col bg-[#1C1C1C] rounded-lg border border-gray-700/50">
      <div className="p-4 border-b border-gray-700/50">
        <h2 className="text-white font-semibold">{title}</h2>
      </div>

      {/* 2. UPDATE THE LOGIC HERE */}
      <div className="flex flex-col divide-y divide-gray-700/50">
        {isLoading && (
          // Show 3 skeleton loaders while loading
          <>
            <TokenRowSkeleton />
            <TokenRowSkeleton />
            <TokenRowSkeleton />
          </>
        )}
        
        {!isLoading && tokens.length > 0 && (
          tokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))
        )}
        
        {!isLoading && tokens.length === 0 && (
          <div className="p-4 text-gray-400 text-sm">
            No pairs found.
          </div>
        )}
      </div>
    </div>
  );
}