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
      const preExistingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      const newItem = action.payload;

      if (preExistingItem) {
        preExistingItem.quantities.amount += newItem.quantities.amount;
        state.totalPrice += newItem.quantities.amount * newItem.quantities.cost;
      } else {
        state.items.push(action.payload);
        state.totalPrice += newItem.quantities.amount * newItem.quantities.cost;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice;
