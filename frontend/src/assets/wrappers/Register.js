import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - var(--nav-height));
  display: grid;
  place-items: center;
  .section-center {
    display: grid;
    gap: 1rem;
    padding: 2rem 1rem;
    place-items: center;

    .section-title {
      text-transform: none;
      font-weight: 700;
      text-align: center;
    }

    p {
      font-size: var(--small-text);
      text-align: center;
    }
  }
  .form {
    display: grid;
    width: 100%;
    padding: 1rem 0;
    gap: 0.5rem;
  }

  .form-row {
    position: relative;
    background-color: var(--grey-200);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .form-label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    font-size: var(--small-text);
    text-transform: capitalize;
  }

  .form-input {
    font-family: inherit;
    padding: 0.5rem 0.5rem;
    padding-top: 1.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }

  .link {
    font-weight: bold;
    color: var(--primary-700);
  }
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 80px;
  }
  .logo {
    height: 100%;
  }
  .logo-text {
    display: none;
  }
`;
export default Wrapper;
