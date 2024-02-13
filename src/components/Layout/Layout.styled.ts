import styled from 'styled-components';
import { device } from '../../css/deviceSize';

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
