import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { MdClose } from "react-icons/md";
import Wrapper from "../assets/wrappers/MenuMobile";
import { useHomeContext } from "../contexts/HomeContextProvider";
import { homeLinks } from "../utils/Links";

const mobileMenu = () => {
  const { toggleMenu, setToggleMenu } = useHomeContext();

  return (
    <Wrapper>
      <div className={`nav-center ${toggleMenu ? "show-menu" : ""}`}>
        <Logo path={"/"} />
        <nav className={"nav-links"}>
          {homeLinks.map(({ text, path, icon }) => (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={() => setToggleMenu(false)}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => setToggleMenu(false)} className="btn-close">
          <MdClose />
        </button>
      </div>
    </Wrapper>
  );
};

export default mobileMenu;
