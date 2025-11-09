"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FILTERS = ["P1", "P2", "P3"];

export function ColumnFilters() {
  const [activeFilter, setActiveFilter] = useState("P1");

  return (
    <div className="flex items-center gap-1 rounded-md bg-[#131313] p-1">
      {FILTERS.map((filter) => (
        <Button
          key={filter}
          variant="ghost"
          onClick={() => setActiveFilter(filter)}
          className={cn(
            "py-1 px-3 text-xs h-auto rounded", 
            activeFilter === filter
              ? "bg-[#5865F2] text-white hover:bg-[#5865F2]/90 cursor-pointer" 
              : "text-gray-400 hover:bg-[#2a2a2a] hover:text-white cursor-pointer"
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}