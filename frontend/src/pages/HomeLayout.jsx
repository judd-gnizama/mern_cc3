import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <h1>HomeLayout</h1>
      <nav className="nav-links">
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </nav>
      <Link to="dashboard">Dashboard</Link>
      <Outlet />
    </>
  );
};

export default HomeLayout;
