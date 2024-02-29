import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';
import { logout } from '../../auth/logout';
import { successNotification } from '../../services/notifications';
import {
  NavLinkSettings,
  SettingsContainer,
  SettingsLinkListThumb,
  SettingsListItem,
  SettingsLogoutBtnTablet,
  TabletSettingsIcon,
  TabletSettingsList,
} from './Settings.styled';
import icons from '../../assets/images/sprite.svg';

const Settings = () => {
  const { t } = useTranslation();
  const { logOut } = useUser()!;
  const navigate = useNavigate();
  const location = useLocation();

  const logoutUserFromSettings = () => {
    //firebase
    logout();
    //context
    logOut();
    navigate('/');
    successNotification('You have successfully logged out!');
  };

  return (
    <SettingsContainer className="main-container">
      <SettingsLinkListThumb>
        <TabletSettingsList>
          <SettingsListItem
            className={
              location.pathname === '/settings/personal-info' ? 'active' : ''
            }
          >
            <NavLinkSettings to="personal-info">
              <TabletSettingsIcon>
                <use href={`${icons}#icon-profile`}></use>
              </TabletSettingsIcon>
              {t('settings.edit')}
            </NavLinkSettings>
          </SettingsListItem>
          <SettingsListItem
            className={
              location.pathname === '/settings/account' ? 'active' : ''
            }
          >
            <NavLinkSettings to="account">
              <TabletSettingsIcon>
                <use href={`${icons}#icon-setting`}></use>
              </TabletSettingsIcon>
              {t('settings.account')}
            </NavLinkSettings>
          </SettingsListItem>
          <SettingsListItem
            className={
              location.pathname === '/settings/account-deletion' ? 'active' : ''
            }
          >
            <NavLinkSettings to="account-deletion">
              <TabletSettingsIcon>
                <use href={`${icons}#icon-trashcan`}></use>
              </TabletSettingsIcon>
              {t('settings.delete')}
            </NavLinkSettings>
          </SettingsListItem>
        </TabletSettingsList>
        <SettingsLogoutBtnTablet type="button" onClick={logoutUserFromSettings}>
          {t('settings.logout')}
        </SettingsLogoutBtnTablet>
      </SettingsLinkListThumb>
      <Outlet />
    </SettingsContainer>
  );
};

export default Settings;
