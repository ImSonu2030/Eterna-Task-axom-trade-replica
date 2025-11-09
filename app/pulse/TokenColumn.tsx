"use client"; 

import React from "react";
import { useSelector } from "react-redux"; 
import { RootState } from "@/lib/store/store"; 
import { Token } from "@/lib/types";
import { TokenRow } from "./TokenRow";
import { TokenRowSkeleton } from "./TokenRowSkeleton";
import { ColumnFilters } from "./ColumnFilters"; // <-- 1. IMPORT IT

interface TokenColumnProps {
  title: string;
  showFilters?: boolean; // <-- 2. Add an optional prop
}

export function TokenColumn({ title, showFilters = false }: TokenColumnProps) { // <-- 3. Use prop

  const { tokens, isLoading } = useSelector((state: RootState) => {
    // ... (Redux logic is unchanged)
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
      {/* 4. UPDATE THE HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700/50">
        <h2 className="text-white font-semibold">{title}</h2>
        {/* Show filters only if the prop is true */}
        {showFilters && <ColumnFilters />}
      </div>

      <div className="flex flex-col divide-y divide-gray-700/50">
        {/* ... (rest of the component is unchanged) ... */}
        {isLoading && (
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