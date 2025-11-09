import { configureStore } from "@reduxjs/toolkit";
import pulseReducer from "./pulseSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      pulse: pulseReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];