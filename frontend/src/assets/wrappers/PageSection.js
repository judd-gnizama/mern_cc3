import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    /* border-radius: var(--border-radius); */
    padding-top: 2rem;
    position: relative;
    /* box-shadow: var(--shadow-2); */
    /* background-color: var(--grey-200); */
  }

  .title {
    position: absolute;
    font-weight: 700;
    font-size: var(--small-text);
    text-transform: uppercase;
    top: 0.5rem;
  }
`;

export default Wrapper;
