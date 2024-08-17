import { Link } from "react-router-dom";
import { cc_logo_round } from "../assets/images";
const Logo = ({ path }) => {
  return (
    <Link to={path} className="logo-container">
      <img src={cc_logo_round} alt="cc" className="logo" />
      <span className="logo-text">Court Control</span>
    </Link>
  );
};

export default Logo;
