import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: var(--grey-100);
  box-shadow: var(--shadow-1);

  .nav-links {
    display: flex;
    align-items: center;
    > *,
    .nav-link {
      flex: 1;
      text-align: center;
      text-transform: capitalize;
      padding: 0.5rem;
    }
  }

  .active {
    border-bottom: 2px solid var(--primary-600);
  }
`;

export default Wrapper;
