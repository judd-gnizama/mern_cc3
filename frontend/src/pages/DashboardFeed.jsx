import Wrapper from "../assets/wrappers/DashboardFeed";
import { PageSection } from "../components";

const DashboardFeed = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <PageSection title="news feed">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
            }}
          >
            News Feed Coming Soon!
          </div>
        </PageSection>
      </div>
    </Wrapper>
  );
};

export default DashboardFeed;
