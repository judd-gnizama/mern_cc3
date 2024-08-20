import { Link, Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardLayout";
import { Footer, LayoutHeader, LayoutSubheader } from "../components";
import { useState } from "react";
import { MdSettings } from "react-icons/md";
import { dashboardLinks } from "../utils/Links";
const DashboardLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <header>
        <LayoutHeader title="Dashboard">
          <MdSettings />
        </LayoutHeader>
      </header>
      <nav className="subheader">
        <LayoutSubheader linkList={dashboardLinks} />
      </nav>
      <main className="page-content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <nav className={`sidebar ${show ? "show-sidebar" : ""}`}>Sidebar</nav>
    </Wrapper>
  );
};

export default DashboardLayout;
