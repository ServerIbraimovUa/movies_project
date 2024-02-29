import styled from "styled-components";
import { device } from "../../../../css/deviceSize";

export const ReviewCardStyled = styled.li`
  display: flex;
  gap: 16px;

  width: 100%;
  padding: 24px 20px;
  border-radius: 24px;
  background-color: var(--light-violet-clr);
  box-shadow: var(--shadow);

  img {
    min-width: 60px;
    height: 60px;
    border-radius: 16px;
  }

  .review-created {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 24px;
  }

  .review-name {
    font-weight: var(--bold-font-weight);
  }

  .review-text {
    font-size: 16px;
  }

  @media ${device.tablet} {
    img {
      min-width: 100px;
      height: 100px;
    }

    .review-text {
      font-size: 20px;
    }
  }

  @media ${device.desktop} {
    padding: 36px;
  }
`;
