import { Link } from "react-router-dom";

interface IconButtonProps {
  to: string;
  homeIcon: string;
  alt: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  to,
  homeIcon,
  alt,
}) => {
  return (
    <div className="icon-button">
      <Link to={to}>
        <img src={homeIcon} alt={alt} className="icon-image" />
      </Link>
    </div>
  );
};
