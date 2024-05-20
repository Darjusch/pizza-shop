import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import IPizzaItem from "../../types/IPizzaItem";

export const PizzaToppingPage = () => {
  const pizza = useSelector((state: any) => state.pizza);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [currentPrice, setCurrentPrice] = useState<number>(
    pizza.currentPizza.price
  );
  const dispatch = useDispatch<AppDispatch>();
  function handleAddToCart() {
    dispatch({
      type: "cart/addToCart",
      payload: {
        ...pizza.currentPizza,
        price: currentPrice,
        topping: [...selectedToppings, ...pizza.currentPizza.topping],
      } as IPizzaItem,
    });
  }
  if (!pizza.currentPizza.name) return <div>No Pizza Selected</div>;
  return (
    <div>
      <h1>{pizza.currentPizza.name}</h1>
      <h3>Choose your toppings</h3>
      <ul>
        {pizza.extraToppings.map((topping: any, index: number) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedToppings.includes(topping.name)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedToppings([...selectedToppings, topping.name]);
                  setCurrentPrice(currentPrice + topping.price);
                } else {
                  setSelectedToppings(
                    selectedToppings.filter((top) => top !== topping.name)
                  );
                  setCurrentPrice(currentPrice - topping.price);
                }
              }}
            />
            <label>
              With {topping.name} (+{topping.price} €)
            </label>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button onClick={handleAddToCart}>Price: {currentPrice}€</button>
      </Link>
    </div>
  );
};
