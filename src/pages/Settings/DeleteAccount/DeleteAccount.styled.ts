import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const DeleteAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.tablet} {
    gap: 40px;
  }
`;

export const DeleteAccountThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    width: 636px;
  }
  @media ${device.desktop} {
    width: 845px;
  }
`;

export const DeleteTitle = styled.h1`
  font-size: 24px;
  line-height: 1;
  font-weight: var(--bold-font-weight);
`;

export const DeleteText = styled.p`
  font-size: 16px;

  @media ${device.tablet} {
    font-size: var(--font-size);
  }
`;

export const DeleteInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font);
  font-size: var(--font-size);
  text-transform: capitalize;
  color: var(--text-clr-grey);
  border: 1px solid var(--text-clr-grey);
  border-radius: 8px;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);

  &:focus-within {
    outline: none;
    color: var(--violet-click);
    border: 1px solid var(--violet-click);
  }

  &.error {
    outline: none;
    color: var(--text-clr-red);
    border: 1px solid var(--text-clr-red);
  }

  @media ${device.tablet} {
    width: 472px;
    &:hover,
    &:focus,
    &:focus-within {
      color: var(--violet-hover);
      border: 1px solid var(--violet-hover);
    }
  }

  @media ${device.desktop} {
    width: 410px;
  }
`;

export const DeleteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.tablet} {
    gap: 60px;
  }
`;
