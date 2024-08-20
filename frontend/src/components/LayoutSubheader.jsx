import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/LayoutSubheader";
const LayoutSubheader = ({ linkList }) => {
  return (
    <Wrapper>
      <nav className="nav-links">
        {linkList.map(({ text, path }) => (
          <NavLink to={path} key={text} className="nav-link" end>
            {text}
          </NavLink>
        ))}
      </nav>
    </Wrapper>
  );
};

export default LayoutSubheader;
