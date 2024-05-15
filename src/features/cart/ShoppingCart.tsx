import shoppingCart from "../../assets/shoppingCart.jpeg";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const cartItems = useSelector((state: any) => state.cart.items);
  return (
    <div style={{ display: "flex", justifyContent: "end", padding: 10 }}>
      <img
        src={shoppingCart}
        alt="shopping-cart"
        style={{ width: "50px", height: "50px" }}
        onClick={() => {}}
      />
      <p>{cartItems.length}</p>
    </div>
  );
}

export default ShoppingCart;
