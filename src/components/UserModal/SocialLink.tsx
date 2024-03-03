import { FC } from 'react';
import { nanoid } from 'nanoid';
import { ISocialLink } from '../../types/userModalTypes';
import {
  SocialMediaIcon,
  SocialMediaItem,
  SocialMediaLink,
  SocialsList,
} from './UserModal.styled';
import icons from '../../assets/images/sprite.svg';

const getIcon = (name: string) => {
  switch (name) {
    case 'twitter':
      return `${icons}#icon-cross`;
    case 'facebook':
      return `${icons}#icon-facebook`;
    case 'instagram':
      return `${icons}#icon-instagram`;
    case 'youtube':
      return `${icons}#icon-youtube`;
    default:
      break;
  }
};

export const SocialLink: FC<ISocialLink> = ({ socials }) => {
  return (
    <div>
      <SocialsList>
        {Object.keys(socials).map(linkName => {
          return (
            <div key={`${socials[linkName]}${nanoid()}`}>
              {socials[linkName] && (
                <SocialMediaItem>
                  <SocialMediaLink
                    href={socials[linkName]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialMediaIcon>
                      <use href={getIcon(linkName)}></use>
                    </SocialMediaIcon>
                  </SocialMediaLink>
                </SocialMediaItem>
              )}
            </div>
          );
        })}
      </SocialsList>
    </div>
  );
};
