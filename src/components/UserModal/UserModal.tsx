import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialLink } from './SocialLink';
import { IModal } from '../../types/userModalTypes';

const UserModal: FC<IModal> = ({ show, close, databaseUser }) => {
  const { t } = useTranslation();
  const { username, imageUrl, sex, country, socials } = databaseUser;

  return (
    <div>
      <Modal show={show} onHide={close}>
        <Modal.Body>
          <div>
            <NavLink to="/settings/personal-info" onClick={close}>
              {t('usermodal.settings')}
            </NavLink>
            <button onClick={close}>{t('usermodal.close')}</button>
            <h1>{t('usermodal.profile')}</h1>
            <div>
              <img
                src={imageUrl}
                alt="Avatar"
                width={'150px'}
                height={'150px'}
              />
              <p>
                {t('usermodal.name')}: {username}
              </p>
              <p>
                {t('usermodal.gender')}: {sex}
              </p>
              <p>{`Country: ${country ? country.label : 'none'}`}</p>
            </div>
            {socials && <SocialLink socials={socials} />}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserModal;
