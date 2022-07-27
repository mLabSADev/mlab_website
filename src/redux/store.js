import { configureStore } from "@reduxjs/toolkit";
import subPageReducer from "./subPage/subPageSlice";
export const store = configureStore({
  reducer: { subPageReducer },
});
