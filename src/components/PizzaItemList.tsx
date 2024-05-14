import IPizzaItem from "../interface";
import PizzaItem from "./PizzaItem";

function PizzaItemList({ menu }: { menu: IPizzaItem[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {menu.map((item, index) => (
          <PizzaItem
            item={item}
            index={index}
            onAddToCart={(item) => {
              console.log("Added to cart", item);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default PizzaItemList;
