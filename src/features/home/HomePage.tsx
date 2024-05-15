import logo from "../../assets/logo.jpeg";
import "../../App.css";
import PizzaItemList from "../pizza/PizzaItemList";
let menu = [
  {
    name: "Margherita",
    price: 5.99,
    image: logo,
    rating: 4.5,
    ingredients: ["cheese", "tomato", "basil"],
  },
];
function HomePage() {
  return (
    <div className="HomePage">
      <PizzaItemList menu={menu} />
    </div>
  );
}

export default HomePage;
