import IPizzaItem from "./PizzaItemInterface";
import PizzaItem from "./PizzaItem";

function PizzaItemList({ menu }: { menu: IPizzaItem[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {menu.map((item, index) => (
          <PizzaItem item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default PizzaItemList;
