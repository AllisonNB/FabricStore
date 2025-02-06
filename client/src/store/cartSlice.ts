import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../types/cartItems";

interface cartState {
  items: cartItem[];
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
    addItem: (state, action: PayloadAction<cartItem>) => {
      state.items.push(action.payload);
      state.totalPrice =
        state.totalPrice +
        action.payload.quantities.amount * action.payload.quantities.cost;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice;
