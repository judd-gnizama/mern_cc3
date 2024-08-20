import { MdSettings } from "react-icons/md";
import Wrapper from "../assets/wrappers/LayoutHeader";

const LayoutHeader = ({ title, children }) => {
  return (
    <Wrapper>
      <div className="center">
        <h3 className="title">{title}</h3>
        <div className="btn-group">{children}</div>
      </div>
    </Wrapper>
  );
};

export default LayoutHeader;
