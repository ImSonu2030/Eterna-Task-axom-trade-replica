// lib/store/pulseSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/lib/types"; // Import our Token type

// 1. Define the shape of our state
interface PulseState {
  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
  isLoading: boolean;
  error: string | null;
}

// 2. Define the initial state
const initialState: PulseState = {
  newPairs: [],
  finalStretch: [],
  migrated: [],
  isLoading: true,
  error: null,
};

// 3. Create the slice
const pulseSlice = createSlice({
  name: "pulse",
  initialState,
  reducers: {
    // Reducer to set tokens for a specific column
    setTokens(
      state,
      action: PayloadAction<{ column: keyof PulseState; tokens: Token[] }>
    ) {
      const { column, tokens } = action.payload;
      if (column === "newPairs" || column === "finalStretch" || column === "migrated") {
        state[column] = tokens;
      }
    },
    // Reducer to set the loading state
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    // Reducer to set an error
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

// 4. Export the actions and the reducer
export const { setTokens, setLoading, setError } = pulseSlice.actions;
export default pulseSlice.reducer;