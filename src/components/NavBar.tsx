import { CartButton } from "./button/CartButton";
import { HomeButton } from "./button/HomeButton";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <div className="navStyle">
      <div className="containerStyle">
        <HomeButton />
        <CartButton />
      </div>
    </div>
  );
};

export default NavBar;
