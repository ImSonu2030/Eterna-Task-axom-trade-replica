import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/lib/types";

interface PulseState {
  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
  isLoading: boolean;
  error: string | null;
  justUpdatedTokenId: string | null; // <-- 1. ADD THIS
}

const initialState: PulseState = {
  newPairs: [],
  finalStretch: [],
  migrated: [],
  isLoading: true,
  error: null,
  justUpdatedTokenId: null, // <-- 2. ADD THIS
};

const pulseSlice = createSlice({
  name: "pulse",
  initialState,
  reducers: {
    setTokens(
      state,
      action: PayloadAction<{ column: keyof PulseState; tokens: Token[] }>
    ) {
      const { column, tokens } = action.payload;
      if (column === "newPairs" || column === "finalStretch" || column === "migrated") {
        state[column] = tokens;
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    // 3. ADD THIS NEW REDUCER
    addToken(state, action: PayloadAction<Token>) {
      // Adds a new token to the start of the 'newPairs' array
      state.newPairs.unshift(action.payload);
      // Optional: limit array size
      if (state.newPairs.length > 20) {
        state.newPairs.pop();
      }
      state.justUpdatedTokenId = action.payload.id; // Flash for new token
    },

    // 4. ADD THIS NEW REDUCER
    updateToken(state, action: PayloadAction<{ id: string; newMarketCap: number }>) {
      const { id, newMarketCap } = action.payload;
      const token = state.newPairs.find((t) => t.id === id);
      if (token) {
        token.marketCap = newMarketCap;
        state.justUpdatedTokenId = id; // Set this ID to trigger flash
      }
    },
    
    // 5. ADD THIS NEW REDUCER
    clearJustUpdated(state) {
      state.justUpdatedTokenId = null;
    }
  },
});

export const { 
  setTokens, 
  setLoading, 
  setError, 
  addToken, 
  updateToken,
  clearJustUpdated // <-- Export the new actions
} = pulseSlice.actions;
export default pulseSlice.reducer;