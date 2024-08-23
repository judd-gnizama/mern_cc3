import Wrapper from "../assets/wrappers/DashboardFeed";
import { GroupTable, PageSection } from "../components";

const DashboardFeed = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="news feed">
          <GroupTable />
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default DashboardFeed;
