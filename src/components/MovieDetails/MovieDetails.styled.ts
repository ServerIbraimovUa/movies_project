import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const MovieCardStyled = styled.div`
  display: grid;
  grid-template-columns: 113px 1fr;
  gap: 20px;

  padding: 20px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.HomeBackground};

  .box-info {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .movie-img {
    width: 113px;
    height: 148px;

    border-radius: 16px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .movie-title {
    font-size: 24px;
    font-weight: var(--bold-font-weight);
  }

  .subtitle {
    font-size: 20px;
    font-weight: var(--bold-font-weight);
  }
  .movie-text {
    font-size: 16px;
    font-weight: var(--regular-font-weight);
  }
  .description {
    width: 100%;

    grid-column: 1 / 3;
  }

  @media ${device.tablet} {
    padding: 24px 20px;
    grid-template-columns: 350px 1fr;

    .movie-img {
      width: 350px;
      height: 432px;
      object-fit: cover;

      grid-row: 1 / 5;
    }

    .movie-info {
      grid-row: 1 / 2;
    }

    .movie-title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 24px;
    }

    .movie-text {
      font-size: 20px;
    }

    .description {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }
  }

  @media ${device.desktop} {
    padding: 36px;
  }
`;
