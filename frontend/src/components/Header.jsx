import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/Header";
import { MdClose, MdDarkMode, MdMenu } from "react-icons/md";
import { useHomeContext } from "../contexts/HomeContextProvider";
import { homeLinks } from "../utils/Links";

const Header = () => {
  const { toggleMenu, setToggleMenu } = useHomeContext();

  return (
    <Wrapper>
      <div className="nav-center _borders">
        <Logo href={"/"} />
        <div className="nav-right">
          <nav className="nav-links">
            {homeLinks.map(({ text, path }) => (
              <NavLink to={path} key={text} className="nav-link" end>
                {text}
              </NavLink>
            ))}
          </nav>
          <Link className="btn-toggle-darkmode">
            <MdDarkMode />
          </Link>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="btn-menu"
          >
            {toggleMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
