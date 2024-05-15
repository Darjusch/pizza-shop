import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IPizzaItem from "./PizzaItemInterface";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [
      {
        name: "test",
        rating: 12,
        price: 12,
        image: "some",
        topping: ["tomato", "cheese"],
      },
    ] as IPizzaItem[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, () => {
        console.log("fetchPizzas pending");
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizzaItem[]>) => {
          state.pizzas = action.payload;
        }
      );
  },
});

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async () => {
  const response = await fetch("http://localhost:1337/pizzas");
  const data = await response.json();

  console.log("data", data);
  return data;
});

export default pizzaSlice.reducer;
