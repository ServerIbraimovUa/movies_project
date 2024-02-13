import styled from "styled-components";
import { device } from "../../../../css/deviceSize";

export const MoreBtnStyled = styled.div`
  display: flex;
  justify-content: center;

  .see-more-btn {
    text-decoration: underline;
    color: var(--dark-violet-clr);
    font-weight: var(--medium-font-weight);
  }

  @media ${device.desktop} {
    justify-content: end;
  }
`;
