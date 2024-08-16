import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <h1>HomeLayout</h1>
      <Outlet />
    </>
  );
};

export default HomeLayout;
