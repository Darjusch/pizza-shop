import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { IconButton } from "./IconButton";

export const CartButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="cart-button-container">
      <IconButton
        to="/cart"
        homeIcon="../../assets/shoppingCart.jepg"
        alt="shoppingCart"
      />
      <span className="cart-count">{cartItems.length}</span>
    </div>
  );
};
