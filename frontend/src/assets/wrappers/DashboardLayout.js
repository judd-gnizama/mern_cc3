import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  header {
    grid-row: 1;
  }
  .subheader {
    grid-row: 2;
  }
  .page-content {
    grid-row: 3;
    min-height: calc(100vh - var(--nav-height));
  }
  footer {
    grid-row: 4;
  }
  .sidebar {
    position: absolute;
    top: 0;
    left: -100%;
  }
  .show-sidebar {
    left: 0;
  }
`;

export default Wrapper;
