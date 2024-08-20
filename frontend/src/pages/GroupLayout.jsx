import { Link, Outlet } from "react-router-dom";

const GroupLayout = () => {
  return (
    <>
      <h2>Group</h2>
      <nav className="nav-links">
        <Link to="edit">EditGroup</Link>
        <Link to="info">GroupInfo</Link>
        <Link to="">AllEvents</Link>
        <Link to="add-event">AddEvent</Link>
      </nav>
      <Link to="e/1">Event</Link>
      <Outlet />
    </>
  );
};

export default GroupLayout;
