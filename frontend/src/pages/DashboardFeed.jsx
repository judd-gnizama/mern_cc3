import Wrapper from "../assets/wrappers/DashboardFeed";
import { AddButton, PageSection, TableList } from "../components";

const DashboardFeed = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="news feed">
          <TableList />
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default DashboardFeed;
