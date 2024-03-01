import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const AccountThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    gap: 80px;
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
`;

export const AccountSelect = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 20px;
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
    width: 519px;
    &:hover,
    &:focus,
    &:focus-within {
      color: var(--violet-hover);
      border: 1px solid var(--violet-hover);
    }
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
`;
