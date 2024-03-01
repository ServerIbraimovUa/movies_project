import styled from 'styled-components';
import { device } from '../../css/deviceSize';
import { NavLink } from 'react-router-dom';

export const SettingsContainer = styled.div`
  padding-top: 60px;
  @media ${device.tablet} {
    display: flex;
    gap: 50px;
    min-height: 700px;
  }
  @media ${device.desktop} {
    gap: 130px;
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

export const SettingsSubmitBtn = styled.button`
  width: 193px;
  height: 44px;
  margin-bottom: 60px;
  font-family: var(--main-font);
  font-weight: var(--medium-font-weight);
  line-height: 1.5;
  border-radius: 12px;
  background-color: var(--dark-violet-clr);
  color: var(--text-clr-white);
  transition: background-color var(--hover-focus-trans);

  &:active {
    background-color: var(--violet-click);
  }

  &:disabled {
    background-color: var(--violet-disabled-clr);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus {
      background-color: var(--violet-hover);
    }
  }
`;

export const SettingsSelect = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font);
  font-size: var(--font-size);
  color: var(--text-clr-grey);
  border-color: var(--text-clr-grey);
  border-radius: 8px;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus-within {
    outline: none;
    color: var(--violet-click);
    border: 1px solid var(--violet-click);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus,
    &:focus-within {
      color: var(--violet-hover);
      border: 1px solid var(--violet-hover);
    }
  }
`;
