import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 17px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  @media ${device.desktop} {
  }
`;
