import { Outlet } from "react-router-dom";
import HomeContextProvider, {
  useHomeContext,
} from "../contexts/HomeContextProvider";
import { Footer, Header, MenuMobile } from "../components";
import Wrapper from "../assets/wrappers/HomeLayout";

const HomeLayout = () => {
  const { toggleMenu } = useHomeContext();

  return (
    <Wrapper>
      <main className="page-home">
        <header>
          <Header />
        </header>
        {toggleMenu && (
          <nav>
            <MenuMobile />
          </nav>
        )}

        <div className="page-content">
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </Wrapper>
  );
};

export default HomeLayout;
