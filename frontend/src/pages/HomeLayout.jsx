import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomeContextProvider from "../contexts/HomeContextProvider";
import MenuMobile from "../components/MenuMobile";

const HomeLayout = () => {
  return (
    <>
      <HomeContextProvider>
        <Header />
        <MenuMobile />
        <h1>HomeLayout</h1>
        <Outlet />
      </HomeContextProvider>
    </>
  );
};

export default HomeLayout;
