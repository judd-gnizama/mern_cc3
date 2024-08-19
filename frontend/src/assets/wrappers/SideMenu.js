import styled from "styled-components";
const Wrapper = styled.aside`
  .black-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: visible;
  }

  .side-menu {
    position: absolute;
    background-color: var(--grey-200);
    top: 0;
    right: 0;
    padding: 0 1rem;
    min-height: 100vh;
    visibility: visible;
  }

  .hide {
    visibility: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: var(--nav-height);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 20px;
  }
  .logo {
    height: 100%;
  }
  .logo-text {
    font-weight: 700;
  }

  .btn-close {
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-link {
    display: inline-flex;
    gap: 0.5rem;
    font-size: 1.25rem;
    text-transform: capitalize;
  }
`;

export default Wrapper;
