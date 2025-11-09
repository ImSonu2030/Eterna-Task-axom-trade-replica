"use client";

import { TokenColumn } from "./TokenColumn";
import { useTokenData } from "@/lib/store/useTokenData";
import { useMockWebSocket } from "@/lib/store/useMockWebSocket";

export default function PulsePage() {
  const { isLoading, error } = useTokenData();
  useMockWebSocket();

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white p-4">
        <div className="text-red-500">Error loading data: {error}</div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Pulse</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TokenColumn title="New Pairs" />
        <TokenColumn title="Final Stretch" />
        <TokenColumn title="Migrated" />
      </div>
    </main>
  );
}