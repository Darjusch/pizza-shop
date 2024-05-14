import IPizzaItem from "../interface";

function PizzaItem({
  item,
  index,
  onAddToCart,
}: {
  item: IPizzaItem;
  index: number;
  onAddToCart: (item: IPizzaItem) => void;
}) {
  const handleAddToCart = () => {
    onAddToCart(item);
  };
  return (
    <li key={index} style={{ display: "flex", alignItems: "center" }}>
      <img src={item.image} alt="pizza" style={{ marginRight: "10px" }} />
      <div>
        <h3>{item.name}</h3>
        <p>Ingredients: {item.ingredients.join(", ")}</p>
        <p>Rating: {item.rating} ⭐️</p>
        <p>Price: {item.price} €</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </li>
  );
}

export default PizzaItem;
