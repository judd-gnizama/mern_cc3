import styled from "styled-components";

const Wrapper = styled.section`
  .page-home {
    display: grid;
    grid-template-columns: 1fr;
  }

  .page-content {
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;

export default Wrapper;
