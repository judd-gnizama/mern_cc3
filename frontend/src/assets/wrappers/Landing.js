import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  max-width: var(--max-width);
  background-image: linear-gradient(to bottom, transparent, black);
  z-index: 0;
  .section-hero {
    grid-template-rows: 1fr auto;
    height: calc(100vh - 0.6 * var(--nav-height));

    .section-inner {
      display: grid;
      text-align: center;

      .section-title {
        font-weight: 700;
      }

      p {
        margin-top: 0.5rem;
      }

      .btn-group {
        margin-top: 1.5rem;
        display: grid;
        gap: 0.5rem;
      }
    }
  }

  section {
    display: grid;
    grid-template-rows: 1fr;
    padding: 2rem;
    position: relative;
    height: 100vh;
    overflow: hidden;
    z-index: 1;

    .section-bg {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: -10;
      width: var(--fluid-width);
      height: 100%;
      img {
        width: 100%;
      }
    }
  }

  .section-inner {
    display: grid;
    text-align: center;

    .section-title {
      font-weight: 700;
    }

    p {
      margin-top: 0.5rem;
    }
  }

  .group-feature {
    display: none;
  }
`;

export default Wrapper;
