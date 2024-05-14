import shoppingCart from "../assets/shoppingCart.jpeg";
import IPizzaItem from "../interface";
function ShoppingCart({ items }: { items: IPizzaItem[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "end", padding: 10 }}>
      <img
        src={shoppingCart}
        alt="shopping-cart"
        style={{ width: "50px", height: "50px" }}
        onClick={() => {
          alert("Shopping cart clicked");
        }}
      />
      <p>{items.length}</p>
    </div>
  );
}

export default ShoppingCart;
