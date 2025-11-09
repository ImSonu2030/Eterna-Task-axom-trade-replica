// lib/store/useTokenData.ts
"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { MOCK_NEW_PAIRS } from "@/lib/dummyData"; // Our mock data
import { Token } from "@/lib/types";
import { setTokens, setLoading, setError } from "./pulseSlice";

// 1. Create a mock API fetch function
// This simulates fetching data from an API
const fetchNewPairs = (): Promise<Token[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // We need to convert creationTime to a Date object
      const processedData = MOCK_NEW_PAIRS.map(token => ({
        ...token,
        creationTime: new Date(token.creationTime)
      }));
      resolve(processedData);
    }, 1000); // Simulate 1 second delay
  });
};

// 2. Create the custom hook
export function useTokenData() {
  const dispatch = useDispatch();

  // 3. Use React Query to fetch the data
  const { data, isLoading, error } = useQuery({
    queryKey: ["newPairs"], // Unique key for this query
    queryFn: fetchNewPairs, // The function to call
  });

  // 4. Use useEffect to update Redux when data changes
  useEffect(() => {
    dispatch(setLoading(isLoading));

    if (data) {
      dispatch(
        setTokens({
          column: "newPairs",
          tokens: data,
        })
      );
      // In a real app, you would also dispatch for 'finalStretch' and 'migrated'
    }

    if (error) {
      dispatch(setError(error.message));
    }
  }, [data, isLoading, error, dispatch]);

  return { isLoading, error };
}