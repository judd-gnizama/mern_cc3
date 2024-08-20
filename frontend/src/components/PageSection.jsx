import Wrapper from "../assets/wrappers/PageSection";

const PageSection = ({ title, children }) => {
  return (
    <Wrapper>
      <div className="section">
        <span className="title">{title}</span>
        {children}
      </div>
    </Wrapper>
  );
};

export default PageSection;
