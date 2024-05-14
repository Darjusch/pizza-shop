import React from "react";
import logo from "./logo.jpeg";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="pizza-logo" />
        <h1>Pizza Shop</h1>
      </header>
      <body>
        <h2>Menu</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul>
            {menu.map((item, index) => (
              // pizza
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt="pizza"
                  style={{ marginRight: "10px" }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} €</p>
                  <p>Rating: {item.rating} ⭐️</p>
                  <p>Ingredients: {item.ingredients.join(", ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </body>
    </div>
  );
}

export default App;
