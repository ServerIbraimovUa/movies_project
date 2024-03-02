import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
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

  @media screen and (min-width: 1024px) {
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
  @media screen and (min-width: 1440px) {
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
  .github-icon,
  .telegram-icon,
  .facebook-icon,
  .circles-icon,
  .cross-icon {
    width: 36px;
    height: 36px;
    fill: transparent;
    stroke: black;
  }
  @media screen and (min-width: 1024px) {
    gap: 24px;
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
  color: var(--text-clr-black);

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    gap: 62px;
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

  @media screen and (min-width: 1024px) {
    gap: 16px;
  }
`;

export const InfoWrapper = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 1440px) {
    margin-top: 38px;
  }
`;
export const SpanInfo = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: var(--text-clr-black);
`;
export const LinkTeam = styled.a`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--dark-violet-clr);
`;
