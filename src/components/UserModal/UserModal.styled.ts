import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const ModalThumb = styled.div`
  padding: 0 15px 15px 15px;
  font-family: var(--main-font);
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ModalLink = styled(NavLink)`
  &:active {
    stroke: var(--violet-click);
  }

  @media ${device.tablet} {
    &:hover,
    &:focus {
      stroke: var(--violet-hover);
    }
  }
`;

export const ModalSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

export const ModalCloseBtn = styled.button`
  &:active {
    stroke: var(--violet-click);
  }
  @media ${device.tablet} {
    &:hover,
    &:focus {
      stroke: var(--violet-hover);
    }
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: var(--bold-font-weight);
`;

export const ModalInfoThumb = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

export const ModalImg = styled.img`
  width: 200px;
  height: 200px;

  overflow: hidden;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ModalTextThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalTextSocialsThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Social Links

export const SocialsList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const SocialMediaItem = styled.li`
  width: 35px;
  height: 35px;
`;

export const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 7px;
  border: 2px solid var(--text-clr-black);
  &:active {
    fill: var(--violet-click);
    border-color: var(--violet-click);
  }
  @media ${device.tablet} {
    &:hover,
    &:focus {
      fill: var(--violet-hover);
      border-color: var(--violet-hover);
    }
  }
`;

export const SocialMediaIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
