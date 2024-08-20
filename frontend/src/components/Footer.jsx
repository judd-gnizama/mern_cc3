import Wrapper from "../assets/wrappers/Footer";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; 2024 Court Control. All Rights Reserved.</p>
      <p>
        Powered by{" "}
        <Link to="/dashboard" className="link">
          JMT
        </Link>
      </p>
    </Wrapper>
  );
};

export default Footer;
