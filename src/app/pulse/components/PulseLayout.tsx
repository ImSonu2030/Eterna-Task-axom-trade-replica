"use client";

import React from "react";
import PulseTabs from "./Tabs/PulseTabs.tsx";
import FinalStretchSection from "./FinalStretch/FinalStretchSection.tsx";
import NewPairsSection from "./NewPairs/NewPairsSection.tsx";
import MigratedSection from "./Migrated/MigratedSection.tsx";

export default function PulseLayout() {
  const [tab, setTab] = React.useState<"new" | "final" | "migrated">("final");

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-zinc-200">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-[#0b0b0f]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 rounded-sm bg-emerald-500" />
            <span className="font-semibold">AXIOM Pro</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <main className="mx-auto max-w-6xl px-4 py-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <NewPairsSection />

        <section className="rounded-xl border border-zinc-800/60 p-3 bg-zinc-950/40">
          <PulseTabs active={tab} onChange={setTab} />

          {tab === "final" && <FinalStretchSection />}
          {tab === "new" && (
            <div className="text-sm text-zinc-400 p-6 text-center border border-dashed border-zinc-800 rounded-lg">
              New Pairs coming next
            </div>
          )}
          {tab === "migrated" && (
            <div className="text-sm text-zinc-400 p-6 text-center border border-dashed border-zinc-800 rounded-lg">
              Migrated coming next
            </div>
          )}
        </section>

        <MigratedSection />
      </main>

      {/* MOBILE TABS */}
      <nav className="lg:hidden sticky bottom-0 border-t border-zinc-800/60 bg-[#0b0b0f]/80 backdrop-blur">
        <PulseTabs active={tab} onChange={setTab} mobile />
      </nav>
    </div>
  );
}
