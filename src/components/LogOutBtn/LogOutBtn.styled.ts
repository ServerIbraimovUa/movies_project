import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const SettingsLogoutBtn = styled.button`
  min-width: 100%;
  height: 40px;
  font-family: var(--main-font);
  font-weight: var(--bold-font-weight);
  color: var(--dark-violet-clr);
  border: 2px solid var(--dark-violet-clr);
  border-radius: 12px;
  margin-bottom: 20px;

  &:active {
    color: var(--violet-click);
    border: 2px solid var(--violet-click);
  }

  @media ${device.tablet} {
    min-width: 230px;
    transform: color var(--hover-focus-trans), border var(--hover-focus-trans);
    &:hover,
    &:focus {
      color: var(--violet-hover);
      border: 2px solid var(--violet-hover);
    }
  }
`;
