import logo from "../assets/images/cc_logo_round.png";
const Logo = ({ href }) => {
  return (
    <a href={href} className="logo-container">
      <img src={logo} alt="cc" className="logo" />
      <span className="logo-text">Court Control</span>
    </a>
  );
};

export default Logo;
