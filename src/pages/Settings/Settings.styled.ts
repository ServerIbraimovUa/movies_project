import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const SettingsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SettingsLinkListThumb = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const SettingsListItem = styled.li`
  width: 180px;
  padding: 7px 0;
  &:active {
    stroke: var(--violet-click);
    color: var(--violet-click);
  }
`;
