import { Link, Outlet } from "react-router-dom";

const EventLayout = () => {
  return (
    <>
      <h2>Event Layout</h2>
      <nav className="nav-links">
        <Link to="edit">EditEvent</Link>
        <Link to="">EventQueue</Link>
        <Link to="stats">EventStats</Link>
        <Link to="admin">EventAdmin</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default EventLayout;
