import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';
import { logout } from '../../auth/logout';
import { successNotification } from '../../services/notifications';
import {
  SettingsContainer,
  SettingsLinkListThumb,
  SettingsListItem,
} from './Settings.styled';

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
    <SettingsContainer>
      <SettingsLinkListThumb>
        <ul>
          <SettingsListItem
            className={
              location.pathname === '/settings/personal-info' ? 'active' : ''
            }
          >
            <Link to="personal-info">{t('settings.edit')}</Link>
          </SettingsListItem>
          <SettingsListItem
            className={
              location.pathname === '/settings/account' ? 'active' : ''
            }
          >
            <Link to="account">{t('settings.account')}</Link>
          </SettingsListItem>
          <SettingsListItem
            className={
              location.pathname === '/settings/account-deletion' ? 'active' : ''
            }
          >
            <Link to="account-deletion">{t('settings.delete')}</Link>
          </SettingsListItem>
        </ul>
        <button type="button" onClick={logoutUserFromSettings}>
          {t('settings.logout')}
        </button>
      </SettingsLinkListThumb>
      <Outlet />
    </SettingsContainer>
  );
};

export default Settings;
