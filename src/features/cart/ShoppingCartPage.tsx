import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function ShoppingCartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h2>Shopping Cart</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          {total === 0 ? (
            <h3>Nothing here yet!</h3>
          ) : (
            cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt="pizza"
                  style={{ height: 100, width: 100 }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} €</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      {total !== 0 && (
        <>
          <h3>Total: {total.toFixed(2)} €</h3>
          <button>Buy Now</button>
        </>
      )}
    </>
  );
}

export default ShoppingCartPage;
