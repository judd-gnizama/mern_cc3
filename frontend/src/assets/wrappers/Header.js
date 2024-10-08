import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.header`
  height: calc(var(--nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);

  .nav-center {
    display: flex;
    height: 100%;
    padding: 1rem 0;
    width: var(--fluid-width);
    max-width: var(--max-width);
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
    padding: 0;
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

  @media (min-width: ${mediaScreens.xs}) {
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
