import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IPizzaItem from "../../types/IPizzaItem";

// Define the initial state with proper types
const initialState = {
  pizzas: [] as IPizzaItem[],
  extraToppings: [
    { name: "cheese", price: 1.5 },
    { name: "tomato", price: 1 },
    { name: "onion", price: 0.5 },
    { name: "mushroom", price: 1.5 },
  ],
  currentPizza: null as IPizzaItem | null,
  loading: false,
  error: null as string | null,
};

// Async thunk for fetching pizzas
export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async () => {
  const response = await fetch("http://localhost:1337/pizzas");
  const data = await response.json();
  return data;
});

// Slice for managing pizza state
export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    selectPizza: (state, action: PayloadAction<IPizzaItem>) => {
      state.currentPizza = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state when starting a new request
        console.log("fetchPizzas pending");
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizzaItem[]>) => {
          state.pizzas = action.payload;
          state.loading = false;
          console.log("fetchPizzas fulfilled");
        }
      )
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pizzas";
        console.error("fetchPizzas failed", action.error);
      });
  },
});

export const { selectPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
