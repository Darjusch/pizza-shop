import React from "react";
import HomeButton from "./home/HomeButton";
import ShoppingCart from "./cart/ShoppingCart";

function NavBar() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <HomeButton />
        <ShoppingCart />
      </div>
    </nav>
  );
}

const navStyle = {
  padding: "10px 20px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

export default NavBar;
