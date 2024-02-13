import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ChangePasswordBtn = styled.button`
  width: 189px;
  height: 44px;
  font-family: var(--main-font-medium);
  border: 1px solid var(--dark-violet-clr);
  border-radius: 12px;
  color: var(--dark-violet-clr);
  background-color: transparent;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);

  &:active {
    border: 1px solid var(--violet-click);
    color: var(--violet-click);
  }

  @media ${device.tablet} {
    width: 216px;
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
  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 30px;

  @media ${device.tablet} {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 60px;
  }
`;

export const SelectorsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${device.tablet} {
    flex-direction: row;
    gap: 40px;
    align-items: center;
  }
`;

export const SexSelect = styled.select`
  width: 166px;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font-regular);
  color: var(--text-clr-grey);
  border-color: var(--text-clr-grey);
  border-radius: 8px;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);

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

export const NameLabel = styled.label`
  width: 268px;

  @media ${device.tablet} {
    width: 290px;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px;
  font-family: var(--main-font-regular);
  color: var(--text-clr-grey);
  border: 1px solid var(--text-clr-grey);
  border-radius: 8px;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);

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

  &.error {
    outline: none;
    color: var(--text-clr-red);
    border: 1px solid var(--text-clr-red);
  }
`;

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 636px;
    margin-bottom: 60px;
  }
`;

export const SocialNetworksInput = styled.input`
  width: 398px;
  height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: var(--main-font-regular);
  color: var(--text-clr-grey);
  border: 1px solid var(--text-clr-grey);
  border-radius: 8px;
  transition: color var(--hover-focus-trans), border var(--hover-focus-trans);

  &:focus-within {
    outline: none;
    color: var(--violet-click);
    border: 1px solid var(--violet-click);
  }

  @media ${device.tablet} {
    width: 308px;
    &:hover,
    &:focus,
    &:focus-within {
      color: var(--violet-hover);
      border: 1px solid var(--violet-hover);
    }

    &:hover::placeholder {
      color: var(--violet-hover);
    }
  }
`;

export const SaveProfileInfoBtn = styled.button`
  width: 193px;
  height: 44px;
  margin-bottom: 60px;
  font-weight: var(--medium-font-weight);
  line-height: 1.5;
  border-radius: 12px;
  background-color: var(--dark-violet-clr);
  color: var(--text-clr-white);
  transition: background-color var(--hover-focus-trans);

  &:active {
    background-color: var(--violet-click);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus {
      background-color: var(--violet-hover);
    }
  }
`;

export const ErrorInputText = styled.p`
  font-family: var(--main-font-regular);
  font-size: 12px;
  color: var(--text-clr-red);
`;
