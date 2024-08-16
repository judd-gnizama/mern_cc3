import styled from "styled-components";

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
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    .logo {
      height: 100%;
    }
    .logo-text {
      font-size: clamp(1.5rem, 5vw, 2rem);
      font-weight: 700;
      white-space: nowrap;
    }
  }
  .nav-links {
    display: flex;
    gap: 1rem;
  }
`;

export default Wrapper;
