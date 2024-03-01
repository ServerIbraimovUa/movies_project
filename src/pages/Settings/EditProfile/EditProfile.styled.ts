import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

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
  font-family: var(--main-font);
  font-weight: var(--bold-font-weight);
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
  font-family: var(--main-font);
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

export const SexThumb = styled.div`
  position: relative;
  width: 166px;
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 12px;
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

export const NameLabel = styled.label`
  width: 268px;

  @media ${device.tablet} {
    width: 290px;
  }
`;

export const NameInput = styled.input`
  width: 100%;
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
  text-transform: capitalize;

  @media ${device.tablet} {
    width: 308px;

    &:hover::placeholder {
      color: var(--violet-hover);
    }
  }
`;

export const ErrorInputText = styled.p`
  font-family: var(--main-font);
  font-size: 12px;
  color: var(--text-clr-red);
`;
