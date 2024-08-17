import { Outlet } from "react-router-dom";
import HomeContextProvider from "../contexts/HomeContextProvider";
import { Header, MenuMobile } from "../components";
import Wrapper from "../assets/wrappers/HomeLayout";

const HomeLayout = () => {
  return (
    <HomeContextProvider>
      <Wrapper>
        <main className="page-home">
          <Header />
          <MenuMobile />
          <div className="page-content">
            <Outlet />
          </div>
        </main>
      </Wrapper>
    </HomeContextProvider>
  );
};

export default HomeLayout;
