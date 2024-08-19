import { Outlet, useLocation } from "react-router-dom";
import HomeContextProvider, {
  useHomeContext,
} from "../contexts/HomeContextProvider";
import { Footer, Header, MenuMobile } from "../components";
import Wrapper from "../assets/wrappers/HomeLayout";
import Register from "./Register";
import Login from "./Login";

const HomeLayout = () => {
  const { toggleMenu } = useHomeContext();
  const pathname = useLocation().pathname;

  switch (pathname) {
    case "/register":
      return <Register />;
    case "/login":
      return <Login />;
    default:
      return (
        <Wrapper>
          <Header />
          {toggleMenu && <MenuMobile />}

          <div className="page-content">
            <Outlet />
          </div>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      );
  }
};

export default HomeLayout;
