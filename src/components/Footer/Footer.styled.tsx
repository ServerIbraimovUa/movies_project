import styled from "styled-components";
import { device } from "../../css/deviceSize";
import { Link } from "react-router-dom";

export const ContainerFooter = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textTitle};
  padding: 24px 16px;
  overflow-x: hidden;

  .separator {
    grid-area: h;
  }

  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(4 auto);
  row-gap: 24px;
  grid-template-areas:
    "l iw"
    "fl fl"
    "h h"
    "bw bw"
    "i i";

  @media ${device.tablet} {
    padding: 40px 30px;
    row-gap: 45px;
    grid-template-columns: auto auto auto;
    grid-template-rows: repeat(3 auto);
    grid-template-areas:
      "l fl fl"
      "h h h "
      "bw bw iw"
      "i i i";
  }
  @media ${device.desktop} {
    padding-top: 87px;
    padding-bottom: 30px;
    padding-left: 80px;
    padding-right: 80px;
    row-gap: 35px;
  }
`;

export const LogoWrapper = styled.div`
  grid-area: l;
  .logo-icon {
    width: 80px;
    height: 44px;
  }
`;
export const IconWrapper = styled.ul`
  grid-area: iw;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;

  @media ${device.tablet} {
    gap: 24px;
  }

  .github-icon,
  .telegram-icon,
  .facebook-icon,
  .circles-icon,
  .cross-icon {
    width: 36px;
    height: 36px;
    fill: transparent;
    stroke: black;

    &:hover {
      stroke: var(--dark-violet-clr);
    }
  }
`;

export const FooterList = styled.ul`
  grid-area: fl;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.02em;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 20px;
  }
  @media ${device.desktop} {
    gap: 62px;
  }
`;

export const FooterLink = styled(Link)`
  &:hover,
  &:focus,
  &:active {
    color: var(--dark-violet-clr);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  grid-area: bw;

  .apple-icon,
  .google-icon {
    width: 189px;
    height: 63px;
    border-radius: 12px;
    border: 1px solid var(--text-clr-black);
  }

  @media ${device.tablet} {
    gap: 16px;
  }
`;

export const InfoWrapper = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media ${device.desktop} {
    margin-top: 38px;
  }
`;
export const SpanInfo = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: ${(props) => props.theme.textTitle};
`;
export const LinkTeam = styled.a`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--dark-violet-clr);
`;
