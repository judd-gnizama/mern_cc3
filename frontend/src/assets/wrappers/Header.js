import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.header`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);

  .nav-center {
    display: flex;
    height: 100%;
    padding: 1rem;
    width: var(--fluid-width);
    align-items: center;
    justify-content: space-between;
  }

  .nav-right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  .nav-link {
    text-transform: capitalize;
  }

  .btn-menu,
  .btn-toggle-darkmode {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: none;
    background: transparent;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
  }

  .logo {
    height: 100%;
  }
  .logo-text {
    display: none;
  }

  @media (min-width: 376px) {
    .logo-text {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      white-space: nowrap;
    }
  }

  @media (min-width: ${mediaScreens.md}) {
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .btn-menu {
      display: none;
    }
  }
`;
export default Wrapper;
