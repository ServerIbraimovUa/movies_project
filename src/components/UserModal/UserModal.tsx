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
  ModalWrap,
  ModalBody,
} from './UserModal.styled';
import defaultImg from '../../images/defaultAvatar.jpg';
import { useUser } from '../../context/UserContext';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const UserModal: FC<IModal> = ({ show, close }) => {
  const { t } = useTranslation();
  const { databaseUser } = useUser()!;
  const { username, imageUrl, sex, country, socials } = databaseUser;
  return (
    <div id="modal-user">
      <Modal show={show} onHide={close}>
        <ModalBody>
        <Modal.Body className="user-modal-body">
          <ModalThumb className="user-modal">
            <ModalWrap>
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
              <LogOutBtn />
            </ModalWrap>
          </ModalThumb>
        </Modal.Body>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserModal;
