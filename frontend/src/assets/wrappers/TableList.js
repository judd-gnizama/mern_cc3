import styled from "styled-components";

// const Wrapper = styled.div`
//   .table {
//     text-align: left;
//     border-spacing: 1rem;
//   }

//   .col {
//   }

//   .row-header {
//   }

//   .item-header {
//     text-transform: capitalize;
//   }

//   .hidden {
//     visibility: collapse;
//   }
// `;

export const Wrapper2 = styled.div`
  padding: 1rem;
  .row-header,
  .row-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  }

  .row-body:hover {
    background-color: pink;
  }

  .item-header {
    text-transform: capitalize;
    font-weight: 700;
    background-color: transparent;
    border: none;
    font-family: inherit;
    text-align: left;
    font-size: unset;
    cursor: pointer;
  }

  .item-header,
  .item-body {
    padding: 1rem;
    min-width: 5rem;
    border: 1px solid red;
  }
`;

// export default Wrapper;
