"use client";

import React from "react";
import { seed } from "../data/seedData.ts";
import type { TokenRow } from "../types/token.ts";

export default function useStreamingRows() {
  const [rows, setRows] = React.useState<TokenRow[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const t = setTimeout(() => setRows(seed), 900);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!rows) return;
    const id = setInterval(() => {
      setRows((prev) =>
        (prev || []).map((r) => ({
          ...r,
          mc: Math.max(1000, Math.round(r.mc * (1 + (Math.random() - 0.5) * 0.02))),
          tx: Math.max(1, r.tx + Math.round((Math.random() - 0.5) * 5)),
        }))
      );
    }, 1600);
    return () => clearInterval(id);
  }, [rows]);

  React.useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.02) setError("Live feed disconnected. Reconnecting…");
      else setError(null);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return { rows, error };
}
