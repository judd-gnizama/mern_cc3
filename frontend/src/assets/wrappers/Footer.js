import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: var(--small-text);
  padding: 1rem 0;
  background-color: var(--grey-100);
  p {
    margin-top: 0.5rem;
  }

  .link {
    font-weight: 700;
    color: var(--primary-500);
  }
`;

export default Wrapper;
