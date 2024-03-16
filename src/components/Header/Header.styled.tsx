import styled from "styled-components";
import { device } from "../../css/deviceSize";
import { Navbar } from "react-bootstrap";

export const ContainerHeader = styled.div`
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.textTitle};
  padding: 10px 0px;
  overflow-x: hidden;
  .logo-icon {
    width: 80px;
    height: 44px;
  }
  .logo {
    margin-right: 85px;
    padding: 0;
    margin: 0;
  }
  @media ${device.tablet} {
    padding: 30px;
  }
`;

export const NavBar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;
export const SettingMobileModalBtn = styled.button`
  width: 44px;
  height: 44px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const SettingMobModalIcon = styled.svg`
  width: 44px;
  height: 44px;
`;

export const SwitcherContainerMob = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  .icon-favorite {
    width: 44px;
    height: 30px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const SwitcherContainerDesk = styled.div`
  align-items: center;
  display: none;

  .icon-favorite {
    width: 44px;
    height: 44px;
  }
  @media ${device.tablet} {
    gap: 24px;
    margin-right: 24px;
    display: flex;
  }
`;
