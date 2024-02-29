import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const ImgWrapper = styled.div`
  position: relative;
`;

export const UserAvatar = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
`;

export const EditAvatarInput = styled.input`
  display: none;
`;

export const EditBtnWrap = styled.div`
  position: relative;
`;

export const FileBtn = styled.button`
  position: absolute;
  top: -31px;
  left: 72px;
  height: 24px;
  width: 24px;
  cursor: pointer;

  fill: var(--dark-violet-clr);

  &:active {
    fill: var(--violet-click);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus {
      fill: var(--violet-hover);
    }
  }
`;

export const EditAvatarIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
