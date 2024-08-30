import Wrapper from "../assets/wrappers/DashboardFeed";
import { GroupTable, PageSection, TableListv4 } from "../components";

const DashboardFeed = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="news feed">
          <GroupTable />
          {/* <TableListv4 /> */}
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default DashboardFeed;
