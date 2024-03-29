import { useEffect, useMemo, useState } from 'react';
import { useUser } from '../../../context/UserContext';
import { writeUserData } from '../../../db/writeData';
import { useNavigate } from 'react-router-dom';
import {
  failedNotification,
  successNotification,
} from '../../../services/notifications';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { CountryHandler } from '../../../types/accountSettings';
import { UserType } from '../../../types/user';
import { useTranslation } from 'react-i18next';
import {
  AccountArrowIcon,
  AccountContainer,
  AccountLabel,
  AccountThumb,
  SelectContainer,
} from './AccountSettings.styled';
import icons from '../../../assets/images/sprite.svg';
import { SettingsSelect, SettingsSubmitBtn } from '../Settings.styled';

const AccountSettings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const options = useMemo(() => countryList().getData(), []);
  const { user, databaseUser, setDatabaseUser } = useUser()!;
  const [userToSave, setUserToSave] = useState({} as UserType);

  useEffect(() => {
    setUserToSave({ ...databaseUser });
  }, [databaseUser]);

  const changeHandler: CountryHandler = chosenCountry => {
    setUserToSave({ ...userToSave, country: chosenCountry });
  };

  const saveAccountSettings = async () => {
    if (!user) return;
    try {
      await writeUserData({ ...userToSave, uid: user.uid });
      setDatabaseUser({ ...userToSave });
      navigate('/');
      successNotification('You have updated your account settings!');
    } catch {
      failedNotification('You have not updated your account settings');
    }
  };

  return (
    <AccountThumb>
      <AccountContainer>
        <AccountLabel>
          {t('accountsettings.defaultlanguage')}
          <SelectContainer>
            <SettingsSelect
              id="account-select"
              name="language"
              value={userToSave.language}
              onChange={e => {
                if (e.target.value === 'ua' || e.target.value === 'en') {
                  setUserToSave({
                    ...userToSave,
                    language: e.target.value,
                  });
                }
              }}
            >
              <option value="en">English</option>
              <option value="ua">Ukrainian</option>
            </SettingsSelect>
            <AccountArrowIcon>
              <use href={`${icons}#icon-down-arrow`}></use>
            </AccountArrowIcon>
          </SelectContainer>
        </AccountLabel>

        <AccountLabel>
          {t('accountsettings.defaulttheme')}
          <SelectContainer>
            <SettingsSelect
              id="account-select"
              name="theme"
              value={userToSave.theme}
              onChange={e => {
                if (e.target.value === 'dark' || e.target.value === 'light') {
                  setUserToSave({ ...userToSave, theme: e.target.value });
                }
              }}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </SettingsSelect>
            <AccountArrowIcon>
              <use href={`${icons}#icon-down-arrow`}></use>
            </AccountArrowIcon>
          </SelectContainer>
        </AccountLabel>
        <AccountLabel>
          {t('accountsettings.country')}
          <SelectContainer>
            <Select
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: baseStyles => ({
                  ...baseStyles,
                  height: '44px',
                  padding: '0 10px',
                  fontFamily: 'var(--main-font) ',
                  fontWeight: 'var(--regular-font-weight)',
                  fontSize: 'var(--font-size)',
                  color: 'var(--text-clr-grey)',
                  borderColor: 'var(--text-clr-grey)',
                  borderRadius: '8px',
                  '@media only screen and (min-width: 1024px)': {
                    width: '519px',
                  },
                }),
              }}
              options={options}
              value={
                userToSave?.country?.value !== ''
                  ? userToSave.country
                  : 'Select a country'
              }
              onChange={(e: any) => changeHandler(e)}
            />
            <AccountArrowIcon>
              <use href={`${icons}#icon-down-arrow`}></use>
            </AccountArrowIcon>
          </SelectContainer>
        </AccountLabel>
      </AccountContainer>
      <SettingsSubmitBtn type="button" onClick={saveAccountSettings}>
        {t('accountsettings.save')}
      </SettingsSubmitBtn>
    </AccountThumb>
  );
};

export default AccountSettings;
