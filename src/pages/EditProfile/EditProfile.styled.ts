import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 60px;
`;

export const PasswordThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChangePasswordBtn = styled.button`
  width: 189px;
  height: 44px;

  font-family: var(--main-font-medium);

  border: 1px solid var(--dark-violet-clr);
  border-radius: 12px;
  color: var(--dark-violet-clr);
  background-color: transparent;

  &:active {
    border: 1px solid var(--violet-click);
    color: var(--violet-click);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus {
      border: 1px solid var(--violet-hover);
      color: var(--violet-hover);
    }
  }
`;

export const EditProfileTitle = styled.h2`
  margin-bottom: 20px;
  font-family: var(--main-font-bold);
  font-weight: var(--bold-font-weight);
  font-size: 24px;
  line-height: 1;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const SelectorsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SexSelect = styled.select`
  width: 166px;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font-regular);
  color: var(--text-clr-grey);
  border-color: var(--text-clr-grey);
  border-radius: 8px;
`;

export const NameInput = styled.input`
  width: 268px;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font-regular);
  color: var(--text-clr-grey);
  border-color: var(--text-clr-grey);
  border-radius: 8px;
`;
