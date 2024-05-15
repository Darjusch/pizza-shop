import IPizzaItem from "./PizzaItemInterface";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

function PizzaItemList() {
  const pizzas: IPizzaItem[] = useSelector((state: any) => state.pizza.pizzas); // Assuming "pizza" is your slice name

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {pizzas.map((item, index) => (
          <PizzaItem item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default PizzaItemList;
