import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const HomePageContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }
`;
export const List = styled.ul`
color: ${(props) => props.theme.textTitle};
  @media ${device.tablet} {
    width: 636px;
    
  }
  @media ${device.desktop} {
    width: 884px;
  }
`;
