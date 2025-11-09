// lib/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import pulseReducer from "./pulseSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      pulse: pulseReducer,
      // We can add other reducers here later
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];