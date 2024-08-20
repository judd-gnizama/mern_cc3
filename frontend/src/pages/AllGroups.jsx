import Wrapper from "../assets/wrappers/AllGroups";
import { PageSection } from "../components";

const AllGroups = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="my groups">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          dolorem id exercitationem dolores illo eveniet ratione quos inventore
          nostrum aut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis at deleniti ab voluptatum similique nesciunt adipisci, neque
          quis, ipsa recusandae corrupti provident doloremque culpa dignissimos
          in quo illo labore unde!
        </PageSection>
        <PageSection title="other groups">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          dolorem id exercitationem dolores illo eveniet ratione quos inventore
          nostrum aut?
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default AllGroups;
