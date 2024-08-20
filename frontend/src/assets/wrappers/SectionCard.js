import styled from "styled-components";

const Wrapper = styled.article`
  .section-card {
    background-color: var(--grey-200);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .section-card:hover {
    margin-left: 1rem;
    transition: var(--transition);
  }

  .card-link {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
  }

  .link {
    padding: 1rem;
  }

  .name {
    font-weight: 700;
  }

  .num-members {
    margin-top: 1rem;
  }
`;

export default Wrapper;
