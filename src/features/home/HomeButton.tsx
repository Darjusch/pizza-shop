import { Link } from "react-router-dom";
import homeIcon from "../../assets/home.png"; // Assuming you have an image for the home icon

function HomeButton() {
  return (
    <div style={{ display: "flex", justifyContent: "end", padding: 10 }}>
      <Link to="/">
        <img
          src={homeIcon}
          alt="homeIcon"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
    </div>
  );
}

export default HomeButton;
