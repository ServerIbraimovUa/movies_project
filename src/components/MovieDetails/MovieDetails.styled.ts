import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const MovieCardStyled = styled.div`
  padding: 20px;
  border-radius: 24px;
  background-color: var(--light-violet-clr);

  .box-info {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
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
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;
