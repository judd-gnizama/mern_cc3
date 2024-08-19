import styled from "styled-components";

const Wrapper = styled.section`
  .page-home {
    display: grid;
    grid-template-rows: auto 1fr auto;
    .page-content {
      height: calc(100vh - var(--nav-height));
      max-width: var(--max-width);
      margin: 0 auto;
    }
    footer {
      grid-row: 3;
    }
  }
`;

export default Wrapper;
