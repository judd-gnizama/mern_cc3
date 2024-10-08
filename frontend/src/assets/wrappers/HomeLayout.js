import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 100% auto;
  .page-content {
    grid-row: 2;
    min-height: calc(100vh - var(--nav-height));
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .footer {
    grid-row: 3;
  }
`;

export default Wrapper;
