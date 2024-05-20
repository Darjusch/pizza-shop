import IPizzaItem from "../../types/IPizzaItem";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function PizzaItem({ item }: { item: IPizzaItem }) {
  const image = logo;
  const dispatch = useDispatch();
  const selectPizza = () => {
    dispatch({ type: "pizza/selectPizza", payload: item });
  };
  return (
    <Link to="/toppings">
      <div
        onClick={selectPizza}
        style={{
          border: "1px solid black",
          borderWidth: "1px",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px", // Add some space between each PizzaItem
        }}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <img src={image} alt="pizza" style={{ marginRight: "10px" }} />
          <div>
            <h3>{item.name}</h3>
            <p>topping: {item.topping.join(", ")}</p>
            <p>rank: {item.rating} ⭐️</p>
            <p>Price: {item.price} €</p>
          </div>
        </li>
      </div>
    </Link>
  );
}

export default PizzaItem;
