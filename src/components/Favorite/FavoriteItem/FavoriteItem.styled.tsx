import styled from "styled-components";
import { MdOutlineFavorite } from "react-icons/md";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 189px;

  text-align: center;
  border-radius: 24px;
  background-color: ${(props) => props.theme.HomeBackground};
  

  @media screen and (min-width: 768px) {
    width: 308px;
  }

  img {
    width: 157px;
    height: 205px;
    @media screen and (min-width: 768px) {
      width: 268px;
      height: 350px;
    }
  }
  .img-wrapper {
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;
    @media screen and (min-width: 1440px) {
    }
  }
  h2 {
    margin-bottom: 12px;
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;

    color: ${(props) => props.theme.textTitle};
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1.25;
    }
    @media screen and (min-width: 1440px) {
    }
  }
  p {
    margin-bottom: 12px;
    color: L var(--dark-violet-clr);
    @media screen and (min-width: 1440px) {
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
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark-violet-clr);
    border-radius: 8px;
    padding: 10px;
    width: 44px;
    height: 44px;
  }

  .star-wrapper {
    margin-bottom: 12px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;
export const Icon = styled(MdOutlineFavorite)`
  width: 24px;
  height: 24px;
  fill: var(--dark-violet-clr);
`;
