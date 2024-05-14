import React from "react";
import logo from "./assets/logo.jpeg";
import "./App.css";
import PizzaItemList from "./components/PizzaItemList";
import ShoppingCart from "./components/ShoppingCart";

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
  let shoppingCart = [
    {
      name: "Margherita",
      price: 5.99,
      image: logo,
      rating: 4.5,
      ingredients: ["cheese", "tomato", "basil"],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="pizza-logo" />
        <h1>Pizza Shop</h1>
      </header>
      <body>
        <h2>Menu</h2>
        <ShoppingCart items={shoppingCart} />
        <PizzaItemList menu={menu} />
      </body>
    </div>
  );
}

export default App;
