import styled from "styled-components";

const Wrapper = styled.section`
  .page-home {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "page-content"
      "footer";
    header {
      grid-area: header;
    }
    nav {
      grid-area: nav;
    }
    .page-content {
      grid-area: page-content;
      height: calc(100vh - var(--nav-height));
      max-width: var(--max-width);
      margin: 0 auto;
    }
    footer {
      grid-area: footer;
      grid-row: 3;
    }
  }
`;

export default Wrapper;
