import styled from "styled-components";
import { device } from "../../../../css/deviceSize";

export const MoreBtnStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  .see-more-btn {
    text-decoration: underline;
    color: var(--dark-violet-clr);
    font-weight: var(--medium-font-weight);
  }

  @media ${device.tablet} {
    margin-bottom: 48px;
  }
`;
