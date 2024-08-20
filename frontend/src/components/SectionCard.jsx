import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/SectionCard";
import { GoLinkExternal } from "react-icons/go";

const SectionCard = ({ path, name, numOfMembers, description }) => {
  return (
    <Wrapper>
      <div className="section-card">
        <Link to={path} className="card-link">
          <span className="name">{name}</span>
          <span className="num-members">Members: {numOfMembers}</span>
          <p className="description">Description: {description}</p>
        </Link>
        <Link to={path} className="link">
          <GoLinkExternal />
        </Link>
      </div>
    </Wrapper>
  );
};

export default SectionCard;
