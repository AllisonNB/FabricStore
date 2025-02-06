import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.ts";

const store = configureStore({
  reducer: cartSlice.reducer,
});

//infer rootstate and appDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
