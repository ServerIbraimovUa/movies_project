import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const MovieCastStyled = styled.div`
  padding: 0 12px;

  .cast-title {
    font-size: 24px;
    font-weight: var(--bold-font-weight);

    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    .cast-title {
      font-size: 32px;
    }
  }
`;
