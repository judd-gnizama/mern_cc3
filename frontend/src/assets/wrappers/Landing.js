import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.section`
  text-align: center;
  display: grid;
  /* width: 80%; */
  padding: 0 1rem;
  margin: 0 auto;

  .section-hero {
    display: grid;
    height: calc(100vh - var(--nav-height));
    place-items: center;
    grid-template-areas:
      "image"
      "inner";

    .section-bg {
      grid-area: image;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .section-inner {
      grid-area: inner;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: -50%;

      .section-title {
        font-weight: 700;
        padding: 0 1rem;
      }

      p {
        padding: 0 2rem;
      }

      .btn-group {
        display: grid;
        gap: 0.3rem;
      }
    }
  }
  @media (min-width: ${mediaScreens.sm}) {
    .section-hero {
      text-align: left;
      grid-template-areas: "inner image";

      .section-bg {
      }
      .section-inner {
        margin-top: 0;
        .section-title,
        p {
          padding: 0;
        }
        .btn-group {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
`;

export default Wrapper;
