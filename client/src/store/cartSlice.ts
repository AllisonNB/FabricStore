import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../types/cartItems";

interface cartState {
  selectedQuickAddItem: cartItem;
  items: cartItem[];
}

//need to worry about this breaking?
const initialCartState: cartState = {
  selectedQuickAddItem: {
    productId: "0",
    name: "fakeItem",
    image: "fakeItem",
    quantities: {
      cost: 0,
      amount: 0,
      sale: false,
    },
  },
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setSelectedQuickAddItem: (state, action: PayloadAction<cartItem>) => {
      const selectedItem = action.payload;
      state.selectedQuickAddItem = selectedItem;
    },
    addSelectedItemAmount: (
      state,
      action: PayloadAction<{ amount: number; productId?: string }>
    ) => {
      const productId = action.payload.productId;
      const amount = action.payload.amount;

      if (productId) {
        const existingItem = state.items.find(
          (item) => item.productId === productId
        );

        if (!existingItem) {
          throw new Error();
        }

        existingItem.quantities.amount += amount;
      } else {
        state.selectedQuickAddItem.quantities.amount += amount;
      }
    },
    removeSelectedItemAmount: (
      state,
      action: PayloadAction<{ amount: number; productId?: string }>
    ) => {
      const productId = action.payload.productId;
      const amount = action.payload.amount;

      if (productId) {
        const existingItem = state.items.find(
          (item) => item.productId === productId
        );

        if (!existingItem) {
          throw new Error();
        }

        if (existingItem.quantities.amount == 0.25) {
          return;
        }
        existingItem.quantities.amount -= amount;
        return;
      }

      state.selectedQuickAddItem.quantities.amount -= amount;
    },
    addItem: (state, action: PayloadAction<cartItem>) => {
      const preExistingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      const newItem = action.payload;

      if (newItem.quantities.amount == 0) {
        return;
      }

      if (preExistingItem) {
        preExistingItem.quantities.amount += newItem.quantities.amount;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<cartItem>) => {
      const ItemToRemove = action.payload;

      console.log(ItemToRemove, "item to remove");
      state.items = state.items.filter(
        (item) => item.name !== ItemToRemove.name
      );
    },
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
