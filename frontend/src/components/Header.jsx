import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/Header";

const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo href={"/"} />
        <nav className="nav-links">
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
          <Link to="about">About</Link>
          <Link>Theme Toggle</Link>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
