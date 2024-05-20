import { RootState } from "../../app/store";
import IPizzaItem from "../../types/IPizzaItem";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

function PizzaItemList() {
  const pizzas: IPizzaItem[] = useSelector(
    (state: RootState) => state.pizza.pizzas
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {pizzas.map((item, index) => (
          <PizzaItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default PizzaItemList;
