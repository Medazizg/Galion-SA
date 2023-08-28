import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "../features/machines/machineSlice";
import atelierReducer from "../features/ateliers/atelierSlice";

export const store = configureStore({
  reducer: {
    machines: machineReducer,
    ateliers: atelierReducer,
  },
});
