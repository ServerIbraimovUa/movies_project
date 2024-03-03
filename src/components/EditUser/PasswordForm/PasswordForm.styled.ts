import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const PasswordTextThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PasswordTitle = styled.h2`
  font-weight: var(--bold-font-weight);
  font-size: 32px;
  line-height: 1.25;
`;
export const PasswordText = styled.p`
  width: 366px;
  font-size: 12px;
  line-height: 2;
  text-align: center;

  @media ${device.tablet} {
    width: 440px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ChangePasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 398px;
  @media ${device.tablet} {
    width: 440px;
  }
`;

export const PasswordFormErrorText = styled.div`
  font-family: var(--second-font);
  font-size: 12px;
  color: var(--text-clr-red);
`;

export const PasswordInputThumb = styled.div`
  position: relative;
  width: 398px;
  @media ${device.tablet} {
    width: 440px;
  }
`;

export const PasswordInputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const PasswordFormInput = styled.input`
  width: 100%;
  &.error {
    outline: none;
    color: var(--text-clr-red);
    border: 1px solid var(--text-clr-red);
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 5px;
`;
