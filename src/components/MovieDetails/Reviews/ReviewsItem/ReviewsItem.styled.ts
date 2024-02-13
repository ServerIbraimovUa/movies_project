import styled from "styled-components";
import { device } from "../../../../css/deviceSize";

export const ReviewCardStyled = styled.li`
  display: flex;
  gap: 16px;

  width: 100%;
  height: 200px;
  padding: 24px 20px;
  overflow: auto;
  border-radius: 24px;
  background-color: var(--light-violet-clr);
  box-shadow: var(--shadow);

  img {
    width: 60px;
    height: 60px;
  }

  @media ${device.desktop} {
  }
`;
