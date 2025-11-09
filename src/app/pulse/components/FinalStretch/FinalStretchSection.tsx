"use client";

import FinalStretchList from "./FinalStretchList.tsx";
import useStreamingRows from "../../hooks/useStreamingRows.ts";

export default function FinalStretchSection() {
  const { rows, error } = useStreamingRows();

  return <FinalStretchList rows={rows} error={error} />;
}
