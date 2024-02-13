import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const TrailerStyled = styled.div`
  .trailer {
    width: 100%;
    height: 238px;
    border-radius: 24px;

    @media ${device.tablet} {
      height: 380px;
    }

    @media ${device.desktop} {
      height: 527px;
    }
  }
`;
