import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { logout } from '../auth/logout';
import { successNotification } from '../services/notifications';

const Settings = () => {
  const { t } = useTranslation();
  const { logOut } = useUser()!;
  const navigate = useNavigate();

  const logoutUserFromSettings = () => {
    //firebase
    logout();
    //context
    logOut();
    navigate('/');
    successNotification('You have successfully logged out!');
  };

  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="personal-info">{t('settings.edit')}</Link>
          </li>
          <li>
            <Link to="account">{t('settings.account')}</Link>
          </li>
          <li>
            <Link to="account-deletion">{t('settings.delete')}</Link>
          </li>
        </ul>
        <button type="button" onClick={logoutUserFromSettings}>
        {t('settings.logout')}
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
