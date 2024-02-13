import styled from "styled-components";
import { device } from "../../../../css/deviceSize";

export const StyledClickImg = styled.img`
  width: 84px;
  height: 108px;
  border-radius: 16px;

  margin-bottom: 8px;

  @media ${device.desktop} {
    width: 190px;
    height: 250px;
  }
`;
export const StyledClickTitle = styled.p`
  max-width: 84px;

  font-size: 16px;
  font-weight: var(--regular-font-weight);
`;
