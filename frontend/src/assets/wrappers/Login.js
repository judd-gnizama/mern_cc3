import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.section`
  height: calc(100vh - var(--nav-height));
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  .article {
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
    padding-right: 3rem;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }

  .btn-visible {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 1rem;
    font-size: 1.25rem;
    color: var(--grey-500);
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

  .utils {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
    font-size: var(--small-text);
    margin-bottom: 1rem;

    label {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  }

  @media (min-width: ${mediaScreens.xs}) {
    .utils {
      flex-direction: unset;
      justify-content: space-between;
    }
  }
`;
export default Wrapper;
