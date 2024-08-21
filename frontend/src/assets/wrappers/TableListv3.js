import styled from "styled-components";

const Wrapper = styled.div`
  .table {
    border: 1px solid #424242;
  }

  .tr {
    display: flex;
    width: fit-content;
  }

  .th,
  .td {
    box-shadow: inset 0 0 0 1px #424242;
    padding: 1rem;
    font-size: var(--small-text);
  }

  .th {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey-400);
    padding: 0.5rem;
    font-weight: bold;
    font-size: x-small;
    text-transform: uppercase;
    text-align: center;
  }

  .td > input {
    margin: 1rem;
    padding: 0.2rem;
    background-color: transparent;
    max-width: 100%;
  }

  .resizer {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    height: 100%;
    width: 5px;
    background-color: #27bbff;
    cursor: col-resize;
    user-select: none;
    touch-action: none;
    border-radius: var(--border-radius);
  }

  .resizer.isResizing {
    background-color: #2eff31;
    opacity: 1;
  }

  *:hover > .resizer {
    opacity: 1;
  }
`;

export default Wrapper;
