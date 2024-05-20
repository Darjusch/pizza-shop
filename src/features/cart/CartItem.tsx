import IPizzaItem from "../../types/IPizzaItem";

interface CartItemProps {
  item: IPizzaItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="cart-item">
      <li style={{ display: "flex", alignItems: "center" }}>
        <img src={item.image} alt="pizza" style={{ height: 100, width: 100 }} />
        <div>
          <h3>{item.name}</h3>
          <p>Price: {item.price} €</p>
          <p>Toppings: {item.topping.join(", ")}</p>
        </div>
      </li>
    </div>
  );
};
