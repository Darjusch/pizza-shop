import "../../App.css";
import PizzaItemList from "../pizza/PizzaItemList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "../pizza/PizzaSlice";
import { AppDispatch } from "../../app/store";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="HomePage">
      <PizzaItemList />
    </div>
  );
}

export default HomePage;
