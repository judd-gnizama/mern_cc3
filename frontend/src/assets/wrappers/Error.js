import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  gap: 2rem;
  padding: 1rem;

  h1 {
    font-weight: 700;
    font-size: 5rem;
    text-transform: uppercase;
    color: var(--primary-500);
  }

  p {
    margin-top: 1rem;
  }
`;

export default Wrapper;
