import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 189px;

  text-align: center;
  border-radius: 24px;
  background-color: var(--violet-clr);

  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1440px) {
    width: 430px;
    height: 692px;
  }

  img {
    width: 157px;
    height: 205px;
    @media screen and (min-width: 768px) {
      width: 268px;
      height: 350px;
    }
    @media screen and (min-width: 1440px) {
      width: 350px;
      height: 432px;
    }
  }
  .img-wrapper {
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }
  h2 {
    margin-bottom: 12px;
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;

    color: var(--text-clr-black);
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1.25;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }
  p {
    margin-bottom: 12px;
    color: L var(--dark-violet-clr);
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  .wrapper-watch {
    display: flex;
    gap: 8px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 44px;
    padding: 12px 40px;

    color: var(--dark-violet-clr);
    border: 1px solid var(--dark-violet-clr);
    border-radius: 12px;
    @media screen and (min-width: 768px) {
      width: 208px;
      height: 44px;
    }
    @media screen and (min-width: 1440px) {
      width: 290px;
      height: 44px;
    }
  }
  button {
    border: 1px solid var(--dark-violet-clr);
    border-radius: 8px;
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;
