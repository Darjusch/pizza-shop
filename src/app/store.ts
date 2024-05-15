import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/ShoppingCartSlice";
import { pizzaSlice } from "../features/pizza/PizzaSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pizza: pizzaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
