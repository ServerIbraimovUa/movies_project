import { useTranslation } from 'react-i18next';
import { logout } from '../../auth/logout';
import { successNotification } from '../../services/notifications';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { SettingsLogoutBtn } from './LogOutBtn.styled';
import { FC } from 'react';
import { ILogOut } from '../../types/logOutBtn';

const LogOutBtn: FC<ILogOut> = ({ close }) => {
  const { t } = useTranslation();
  const { logOut } = useUser()!;
  const navigate = useNavigate();

  const logoutUserFromSettings = () => {
    //firebase
    logout();
    //context
    logOut();
    if (close) {
      close();
    }
    navigate('/');
    successNotification('You have successfully logged out!');
  };

  return (
    <SettingsLogoutBtn type="button" onClick={logoutUserFromSettings}>
      {t('settings.logout')}
    </SettingsLogoutBtn>
  );
};

export default LogOutBtn;
