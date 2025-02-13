import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../types/cartItems";
import { v4 as uuid } from "uuid";

interface cartState {
  selectedQuickAddItem: cartItem | null;
  items: { [id: number]: cartItem };
  totalPrice: number;
}

const initialCartState: cartState = {
  selectedQuickAddItem: null,
  items: {},
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setSelectedQuickAddItem: (state, action: PayloadAction<cartItem>) => {
      const selectedItem = action.payload;
      state.selectedQuickAddItem = selectedItem;
      console.log(state.selectedQuickAddItem, "cheese2");
    },
    addSelectedItemAmount: (
      state,
      action: PayloadAction<{ amount: number }>
    ) => {
      const amount = action.payload.amount;

      state.selectedQuickAddItem.quantities.amount += amount;
    },
    removeSelectedItemAmount: (
      state,
      action: PayloadAction<{ amount: number }>
    ) => {
      const amount = action.payload.amount;
      const newAmount = state.selectedQuickAddItem.quantities.amount - amount;
      if (newAmount <= 0) {
        state.selectedQuickAddItem.quantities.amount = 0;
      } else {
        state.selectedQuickAddItem.quantities.amount = newAmount;
      }
    },
    addItem: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const productId = newItem.productId;
      const currentItems = state.items;

      if (newItem.quantities.amount == 0) {
        return;
      }

      const existingItem = Object.keys(state.items).find((key: string) => {
        const item = state.items[key as keyof typeof state.items];
        return item.productId === productId;
      });

      if (existingItem) {
        currentItems[productId].quantities.amount += newItem.quantities.amount;
      } else {
        const newId = uuid();
        currentItems[newId] = newItem;
      }

      state.totalPrice += newItem.quantities.amount * newItem.quantities.cost;
    },
    removeItem: (state, action: PayloadAction<cartItem>) => {
      const removedItem = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== removedItem.name
      );
      state.totalPrice -=
        removedItem.quantities.amount * removedItem.quantities.cost;
    },
    incrementCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      const amount = action.payload.amount;
      const newAmount = state.item;
    },
    decrementCartItemQuantity: () => {},
  },
});

export const {
  addItem,
  removeItem,
  setSelectedQuickAddItem,
  addSelectedItemAmount,
  removeSelectedItemAmount,
} = cartSlice.actions;
export default cartSlice;
