import styled from "styled-components";

const Wrapper = styled.button`
  border: none;
  display: flex;
  background-color: transparent;

  .btn-add {
    position: fixed;
    bottom: 10px;
    right: 10px;
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
`;

export default Wrapper;
