import styled from "styled-components";

export const ButtonLoginMob = styled.button`
  position: relative;
  .icon-login {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonLogin = styled.button`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 137px;
    height: 44px;
    background-color: var(--dark-violet-clr);
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.02em;
    padding: 12px 40px;
    border-radius: 12px;
  }
`;
