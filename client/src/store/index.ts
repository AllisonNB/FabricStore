import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.cost;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { addItem } = cartSlice.actions;

export default store;
