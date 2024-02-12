import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { logout } from '../../auth/logout';
import { useUser } from '../../context/UserContext';
import {
  ModalBtnContainer,
  ModalCloseBtn,
  ModalSvg,
} from '../UserModal/UserModal.styled';
import icons from '../../assets/images/sprite.svg';
import {
  SettingsIcon,
  SettingsList,
  SettingsLogoutBtn,
  SettingsThumb,
} from './SettingMobModal.styled';
import { SettingsListItem } from '../../pages/Settings/Settings.styled';

interface ISettings {
  show: boolean;
  close(): void;
}

const SettingsMobModal: FC<ISettings> = ({ show, close }) => {
  const { t } = useTranslation();
  const { logOut } = useUser()!;

  const handleLogOut = () => {
    //firebase
    logout();
    //context
    logOut();
  };

  return (
    <Modal
      show={show}
      onHide={close}
      className="settings-modal"
      fullscreen={true}
    >
      <Modal.Body className="settings-modal-body">
        <ModalBtnContainer>
          <ModalCloseBtn onClick={close}>
            <ModalSvg>
              <use href={`${icons}#icon-close-btn`}></use>
            </ModalSvg>
          </ModalCloseBtn>
        </ModalBtnContainer>
        <SettingsThumb>
          <SettingsList>
            <SettingsListItem onClick={close}>
              <Link to="/settings/personal-info" className="settings-link">
                <SettingsIcon>
                  <use href={`${icons}#icon-profile`}></use>
                </SettingsIcon>
                {t('settings.edit')}
              </Link>
            </SettingsListItem>
            <SettingsListItem onClick={close}>
              <Link to="/settings/account" className="settings-link">
                <SettingsIcon>
                  <use href={`${icons}#icon-setting`}></use>
                </SettingsIcon>
                {t('settings.account')}
              </Link>
            </SettingsListItem>
            <SettingsListItem onClick={close}>
              <Link to="/settings/account-deletion" className="settings-link">
                <SettingsIcon>
                  <use href={`${icons}#icon-trashcan`}></use>
                </SettingsIcon>
                {t('settings.delete')}
              </Link>
            </SettingsListItem>
          </SettingsList>
          <SettingsLogoutBtn type="button" onClick={handleLogOut}>
            {t('settings.logout')}
          </SettingsLogoutBtn>
        </SettingsThumb>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsMobModal;
