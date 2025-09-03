import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;

  .table-settings {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    .input-filter {
      padding: 0.5rem;
      border-radius: var(--border-radius);
      border: 1px solid black;
    }
  }
  .status-bar {
    font-size: var(--small-text);
    padding: 0.5rem 0;
  }
  .header-toggles {
    display: flex;
    width: fit-content;
    flex-direction: column;

    span {
      font-weight: 700;
    }

    > label {
      text-transform: capitalize;
      display: flex;
      gap: 0.5rem;
    }
  }
  :checked {
    accent-color: var(--primary-700);
  }
  .table {
    border: 1px solid #424242;
    max-width: calc(100vw - 2rem);
    overflow: scroll;
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

  .truncate {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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

  .match {
    background-color: var(--primary-100);
    color: var(--primary-800);
    font-weight: bold;
  }

  .btn-group-pagination {
    position: sticky;
    top: 0;
  }
`;

export default Wrapper;
