import "../../app/App.css";
import PizzaItemList from "../pizza/PizzaItemList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../pizza/PizzaSlice";
import { AppDispatch, RootState } from "../../app/store";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.pizza);
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="HomePage">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && <PizzaItemList />}
    </div>
  );
};
