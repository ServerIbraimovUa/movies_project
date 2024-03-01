import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const MovieSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    gap: 32px;
  }
`;

export const BackBtnStyled = styled(Link)`
  text-decoration: underline;
  color: var(--dark-violet-clr);
  font-weight: var(--medium-font-weight);
`;
