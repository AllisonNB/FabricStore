import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../types/cartItems";

interface cartState {
  items: cartItem;
  totalPrice: number;
}

const initialCartState: cartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action: PayloadAction<cartItem>) {
      state.items.push(action.payload);
      //update total price
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { addItem } = cartSlice.actions;

//infer rootstate and appdispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
