"use client";

import { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  MOCK_NEW_PAIRS,
  MOCK_FINAL_STRETCH,
  MOCK_MIGRATED,
} from "@/lib/dummyData";
import { Token } from "@/lib/types";
import { setTokens, setLoading, setError } from "./pulseSlice";

const mockFetch = (data: Token[], delay: number): Promise<Token[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

const fetchNewPairs = () => mockFetch(MOCK_NEW_PAIRS, 1000);
const fetchFinalStretch = () => mockFetch(MOCK_FINAL_STRETCH, 1500);
const fetchMigrated = () => mockFetch(MOCK_MIGRATED, 500);

export function useTokenData() {
  const dispatch = useDispatch();

  const results = useQueries({
    queries: [
      { queryKey: ["newPairs"], queryFn: fetchNewPairs },
      { queryKey: ["finalStretch"], queryFn: fetchFinalStretch },
      { queryKey: ["migrated"], queryFn: fetchMigrated },
    ],
  });

  const isLoading = results.some((query) => query.isLoading);
  const error = results.find((query) => query.error)?.error;

  useEffect(() => {
    dispatch(setLoading(isLoading));

    if (results[0].data) {
      dispatch(
        setTokens({ column: "newPairs", tokens: results[0].data })
      );
    }
    if (results[1].data) {
      dispatch(
        setTokens({ column: "finalStretch", tokens: results[1].data })
      );
    }
    if (results[2].data) {
      dispatch(
        setTokens({ column: "migrated", tokens: results[2].data })
      );
    }
    
    if (error) {
      dispatch(setError(error.message));
    }
  }, [
    isLoading,
    error,
    dispatch,
    results[0].data,
    results[1].data,
    results[2].data,
  ]);

  return { isLoading, error: error?.message || null };
}