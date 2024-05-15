import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IPizzaItem from "../pizza/PizzaItemInterface";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as IPizzaItem[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<IPizzaItem>) => {
      state.items.push(action.payload);
    },
    buyNow: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, buyNow } = cartSlice.actions;

export default cartSlice.reducer;
