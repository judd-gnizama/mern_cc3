import { Link } from "react-router-dom";
import logo from "../assets/images/cc_logo_round.png";
const Logo = ({ path }) => {
  return (
    <Link to={path} className="logo-container">
      <img src={logo} alt="cc" className="logo" />
      <span className="logo-text">Court Control</span>
    </Link>
  );
};

export default Logo;
