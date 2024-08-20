import styled from "styled-components";
import mediaScreens from "../css/mediaScreens";

const Wrapper = styled.section`
  text-align: center;
  display: grid;
  padding: 0 3rem;
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
      img {
        width: 90%;
      }
    }
    .section-inner {
      grid-area: inner;
      display: flex;
      flex-direction: column;
      margin-top: -50%;
      gap: 2rem;

      .section-title {
        font-weight: 700;
        padding: 0 0.5rem;
      }

      p {
        margin-top: 1rem;
        padding: 0 1rem;
      }

      .btn-group {
        display: grid;
        gap: 0.3rem;
      }
    }
  }
  @media (min-width: ${mediaScreens.md}) {
    .section-hero {
      text-align: left;
      grid-template-areas: "inner image";

      .section-bg {
        img {
          width: 100%;
        }
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
