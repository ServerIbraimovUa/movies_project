import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const ActorPageContainer = styled.div`
  margin-top: 24px;

  @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }
`;
export const PersonalInfoContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    width: 250px;
  }
  @media ${device.desktop} {
    display: flex;
    width: 350px;
  }
`;
export const BiographyContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 692px;
  }
  @media ${device.desktop} {
    width: 910px;
  }
`;
