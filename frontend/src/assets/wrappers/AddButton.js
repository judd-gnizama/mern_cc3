import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.button`
  border: none;
  display: flex;
  background-color: transparent;

  .btn-add {
    position: fixed;
    bottom: clamp(20px, 20vw, 2.5rem);
    right: clamp(20px, 20vw, 2.5rem);
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .icon {
    font-size: 3rem;
    background-color: var(--primary-500);
    color: var(--white);
    border-radius: 50%;
  }

  .label {
    text-transform: capitalize;
  }

  @media (min-width: ${mediaScreens.sm}) {
  }
`;

export default Wrapper;
