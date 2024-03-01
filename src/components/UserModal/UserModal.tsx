import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SocialLink } from './SocialLink';
import { IModal } from '../../types/userModalTypes';
import icons from '../../assets/images/sprite.svg';
import {
  ModalBtnContainer,
  ModalCloseBtn,
  ModalImg,
  ModalInfoThumb,
  ModalLink,
  ModalSvg,
  ModalTextSocialsThumb,
  ModalTextThumb,
  ModalThumb,
  ModalTitle,
} from './UserModal.styled';
import defaultImg from '../../images/defaultAvatar.jpg';

const UserModal: FC<IModal> = ({ show, close, databaseUser }) => {
  const { t } = useTranslation();
  const { username, imageUrl, sex, country, socials } = databaseUser;
  console.log(databaseUser);
  return (
    <div id="modal-user">
      <Modal show={show} onHide={close}>
        <Modal.Body className="user-modal-body">
          <ModalThumb className="user-modal">
            <ModalBtnContainer>
              <ModalLink to="/settings/personal-info" onClick={close}>
                <ModalSvg>
                  <use
                    href={`${icons}#icon-setting`}
                    className="modal-icon"
                  ></use>
                </ModalSvg>
              </ModalLink>
              <ModalCloseBtn onClick={close}>
                <ModalSvg>
                  <use href={`${icons}#icon-close-btn`}></use>
                </ModalSvg>
              </ModalCloseBtn>
            </ModalBtnContainer>
            <ModalTitle>{t('usermodal.profile')}</ModalTitle>
            <ModalInfoThumb>
              <ModalImg
                src={imageUrl ? imageUrl : defaultImg}
                alt="Avatar"
                width={'150px'}
                height={'150px'}
              />
              <ModalTextSocialsThumb>
                <ModalTextThumb>
                  <p>
                    {t('usermodal.name')}: {username}
                  </p>
                  <p>
                    {t('usermodal.gender')}: {sex}
                  </p>
                  <p>{`Country: ${country ? country.label : 'none'}`}</p>
                </ModalTextThumb>
                {socials && <SocialLink socials={socials} />}
              </ModalTextSocialsThumb>
            </ModalInfoThumb>
          </ModalThumb>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserModal;
