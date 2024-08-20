import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.nav`
  .nav-center {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    margin-left: -200%;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .show-menu {
    margin-left: 0;
  }

  .logo-container {
    width: 50px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-link {
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: none;
    background: transparent;
  }

  @media (min-width: ${mediaScreens.sm}) {
    .logo-container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
