import { Outlet, useLocation } from "react-router-dom";
import HomeContextProvider, {
  useHomeContext,
} from "../contexts/HomeContextProvider";
import { Footer, Header, MenuMobile, SideMenu } from "../components";
import Wrapper from "../assets/wrappers/HomeLayout";
import Register from "./Register";
import Login from "./Login";
import DashboardLayout from "./DashboardLayout";

const HomeLayout = () => {
  const { toggleMenu } = useHomeContext();
  const pathname = useLocation().pathname;

  if (pathname === "/register") {
    return <Register />;
  } else if (pathname === "/login") {
    return <Login />;
  } else if (pathname.startsWith("/dashboard")) {
    return <Outlet />;
  } else {
    return (
      <Wrapper>
        <Header />
        <div className="page-content">
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
        {toggleMenu && <MenuMobile />}
      </Wrapper>
    );
  }
};

export default HomeLayout;
