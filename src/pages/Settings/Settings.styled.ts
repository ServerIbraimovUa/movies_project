import styled from 'styled-components';
import { device } from '../../css/deviceSize';
import { NavLink } from 'react-router-dom';

export const SettingsContainer = styled.div`
  padding-top: 60px;
  @media ${device.tablet} {
    display: flex;
    gap: 45px;
    min-height: 500px;
  }
`;

export const SettingsLinkListThumb = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 278px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: var(--violet-clr);
  }
`;

export const TabletSettingsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: var(--main-font);
  font-weight: var(--bold-font-weight);
  color: var(--text-clr-grey);
`;

export const SettingsListItem = styled.li`
  width: 230px;
  padding: 10px 15px;
  transform: stroke var(--hover-focus-trans), color var(--hover-focus-trans),
    border var(--hover-focus-trans);

  &:active {
    stroke: var(--violet-click);
    color: var(--violet-click);
  }

  &.active {
    stroke: var(--dark-violet-clr);
    color: var(--dark-violet-clr);
    border: 2px solid var(--dark-violet-clr);
    border-radius: 8px;
  }
`;

export const TabletSettingsIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--text-clr-grey);
`;

export const NavLinkSettings = styled(NavLink)`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SettingsLogoutBtnTablet = styled.button`
  min-width: 230px;
  height: 40px;
  font-family: var(--main-font);
  font-weight: var(--bold-font-weight);
  color: var(--dark-violet-clr);
  border: 2px solid var(--dark-violet-clr);
  border-radius: 12px;
  margin-bottom: 20px;
  transform: color var(--hover-focus-trans), border var(--hover-focus-trans);

  &:active {
    color: var(--violet-click);
    border: 2px solid var(--violet-click);
  }

  &:hover,
  &:focus {
    color: var(--violet-hover);
    border: 2px solid var(--violet-hover);
  }
`;
