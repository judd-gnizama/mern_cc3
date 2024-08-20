import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  height: var(--nav-height);
  box-shadow: var(--shadow-1);

  .center {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .title {
    max-width: var(--fluid-width);
    font-weight: 700;
    padding: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .btn-group {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;
export default Wrapper;
