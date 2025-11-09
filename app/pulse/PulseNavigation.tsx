// app/pulse/PulseNavigation.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TABS = ["New Pairs", "Final Stretch", "Migrated"];

export function PulseNavigation() {
  const [activeTab, setActiveTab] = useState("New Pairs");

  return (
    <nav className="flex items-center gap-2 mb-4">
      {TABS.map((tab) => (
        <Button
          key={tab}
          variant="ghost"
          onClick={() => setActiveTab(tab)}
          className={cn(
            "py-2 px-4 rounded-lg text-sm font-semibold",
            activeTab === tab
              ? "bg-[#1C1C1C] text-white cursor-pointer" 
              : "text-gray-400 hover:text-white cursor-pointer" 
          )}
        >
          {tab}
        </Button>
      ))}
    </nav>
  );
}