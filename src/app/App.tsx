import RouterComponent from "./router"; // Import the RouterComponent from the app folder
import { Provider } from "react-redux";
import store from "./store";
import logo from "../assets/logo.jpeg";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="pizza-logo" />
          <h1>Pizza Shop</h1>
        </header>
        <RouterComponent />
      </div>
    </Provider>
  );
}

export default App;
