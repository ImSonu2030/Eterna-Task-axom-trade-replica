import React from "react";
import TokenItem from "./TokenItem.tsx";
import TokenItemSkeleton from "../Skeletons/TokenItemSkeleton.tsx";

export default function FinalStretchList({
  rows,
  error,
}: {
  rows: any[] | null;
  error: string | null;
}) {
  if (!rows) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <TokenItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {error && (
        <div className="text-xs text-amber-300 bg-amber-900/20 border border-amber-700/40 rounded px-2 py-1">
          {error}
        </div>
      )}

      {rows.map((row) => (
        <TokenItem key={row.id} row={row} />
      ))}
    </div>
  );
}
