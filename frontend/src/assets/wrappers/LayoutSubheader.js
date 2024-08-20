import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

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
      padding: 0.75rem;
      border-bottom: 2px solid transparent;
    }
  }

  .active.active {
    border-bottom: 2px solid var(--primary-600);
  }

  @media (min-width: ${mediaScreens.md}) {
    .nav-links {
      .nav-link {
        flex: none;
        padding: 0.75rem 5rem;
      }
    }
  }
`;

export default Wrapper;
