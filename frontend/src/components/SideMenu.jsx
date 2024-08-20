import { MdClose } from "react-icons/md";
import Wrapper from "../assets/wrappers/SideMenu";
import { Logo } from "../components";
import { homeLinks } from "../utils/Links";
import { NavLink } from "react-router-dom";
import { useHomeContext } from "../contexts/HomeContextProvider";
import { useEffect } from "react";

const SideMenu = () => {
  const { toggleMenu, setToggleMenu } = useHomeContext();

  useEffect(() => {
    setToggleMenu(false);
  }, []);

  return (
    <Wrapper>
      <div className={`black-bg ${toggleMenu ? "" : "hide"}`}>
        <aside className={`side-menu ${toggleMenu ? "" : "hide"}`}>
          <div className="header">
            <Logo />
            <MdClose
              className="btn-close"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>
          <div className="nav-links">
            {homeLinks.map(({ text, path, icon }) => (
              <NavLink className="nav-link" to={path} key={text} end>
                {icon}
                {text}
              </NavLink>
            ))}
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

export default SideMenu;
