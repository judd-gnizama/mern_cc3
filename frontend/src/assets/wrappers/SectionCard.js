import styled from "styled-components";

const Wrapper = styled.article`
  background-color: var(--grey-200);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .card-link {
    display: grid;
    grid-template-columns: 1fr;
  }

  .link {
    padding: 1rem;
  }

  .card-link:hover {
    margin-left: 1rem;
    transition: var(--transition);
  }

  .name {
    font-weight: 700;
  }
`;

export default Wrapper;
