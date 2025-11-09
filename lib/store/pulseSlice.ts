import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/lib/types";

interface PulseState {
  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
  isLoading: boolean;
  error: string | null;
  justUpdatedTokenId: string | null; 
}

const initialState: PulseState = {
  newPairs: [],
  finalStretch: [],
  migrated: [],
  isLoading: true,
  error: null,
  justUpdatedTokenId: null, 
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

    addToken(state, action: PayloadAction<Token>) {
     
      state.newPairs.unshift(action.payload);
     
      if (state.newPairs.length > 20) {
        state.newPairs.pop();
      }
      state.justUpdatedTokenId = action.payload.id; 
    },

    updateToken(state, action: PayloadAction<{ id: string; newMarketCap: number }>) {
      const { id, newMarketCap } = action.payload;
      const token = state.newPairs.find((t) => t.id === id);
      if (token) {
        token.marketCap = newMarketCap;
        state.justUpdatedTokenId = id; 
      }
    },
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
  clearJustUpdated 
} = pulseSlice.actions;
export default pulseSlice.reducer;