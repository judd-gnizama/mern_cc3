import Wrapper from "../assets/wrappers/DashboardFeed";
import { AddButton, PageSection, TableListv2 } from "../components";

const DashboardFeed = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="news feed">
          <TableListv2 />
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default DashboardFeed;
