import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const AccountThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  @media ${device.tablet} {
    gap: 80px;
  }
  @media ${device.desktop} {
    gap: 150px;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${device.tablet} {
    gap: 25px;
  }
`;

export const AccountLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: var(--main-font);
  font-weight: var(--bold-font-weight);
  font-size: 24px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 398px;

  @media ${device.tablet} {
    width: 636px;
  }
  @media ${device.desktop} {
    width: 845px;
  }
`;

export const AccountArrowIcon = styled.svg`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 12px;
  width: 16px;
  height: 16px;
  pointer-events: none;

  @media ${device.tablet} {
    right: 138px;
    top: 12px;
  }
  @media ${device.desktop} {
    right: 346px;
    top: 12px;
  }
`;
