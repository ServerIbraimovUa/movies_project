import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';

import {
  NavLinkSettings,
  SettingsContainer,
  SettingsLinkListThumb,
  SettingsListItem,
  TabletSettingsIcon,
  TabletSettingsList,
} from './Settings.styled';
import icons from '../../assets/images/sprite.svg';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { readData } from '../../db/readData';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';

const Settings = () => {
  const { t } = useTranslation();
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
        <LogOutBtn />
      </SettingsLinkListThumb>
      <Outlet />
    </SettingsContainer>
  );
};

export default Settings;
