import { IconButton } from "./IconButton";

export const HomeButton = () => {
  return (
    <div className="home-button-container">
      <IconButton to="/" homeIcon="../../assets/home.png" alt="homeIcon" />
    </div>
  );
};
