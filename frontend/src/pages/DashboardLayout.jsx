import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <h2>Dashboard Layout</h2>
      <nav className="nav-links">
        <Link to="profile">UserProfile</Link>
        <Link to="">DashboardFeed</Link>
        <Link to="all-groups">AllGroups</Link>
        <Link to="add-group">AddGroup</Link>
      </nav>
      <Link to="g/1">Group</Link>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
