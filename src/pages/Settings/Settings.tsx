import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { readData } from '../../db/readData';

const Settings = () => {
  const { t } = useTranslation();
  const { logOut } = useUser()!;
  const navigate = useNavigate();
  const location = useLocation();
  const { setDatabaseUser } = useUser()!;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const fetchUserFromDatabase = async () => {
      if (!auth.currentUser) return;
      setDatabaseUser(await readData(auth.currentUser.uid));
    };
    fetchUserFromDatabase();
  }, [user, setDatabaseUser]);

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
