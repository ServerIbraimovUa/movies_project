import { t } from 'i18next';
import { FC } from 'react';
import { nanoid } from 'nanoid';
import { ISocialLink } from '../../types/userModalTypes';

export const SocialLink: FC<ISocialLink> = ({ socials }) => {
  const id = nanoid();
  return (
    <div>
      <h2>{t('usermodal.social')}</h2>
      <ul>
        {Object.keys(socials).map(linkName => {
          return (
            <li key={`${socials[linkName]}${id}`}>
              <a href={socials[linkName]} target="_blank" rel="noreferrer">
                {linkName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
