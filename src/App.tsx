import logo from "./assets/logo.jpeg";
import "./App.css";
import PizzaItemList from "./features/pizza/PizzaItemList";
import ShoppingCart from "./features/cart/ShoppingCart";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  let menu = [
    {
      name: "Margherita",
      price: 5.99,
      image: logo,
      rating: 4.5,
      ingredients: ["cheese", "tomato", "basil"],
    },
  ];

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="pizza-logo" />
          <h1>Pizza Shop</h1>
        </header>
        <body>
          <h2>Menu</h2>
          <ShoppingCart />
          <PizzaItemList menu={menu} />
        </body>
      </div>
    </Provider>
  );
}

export default App;
