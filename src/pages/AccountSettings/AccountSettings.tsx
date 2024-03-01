import { useEffect, useMemo, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { readData } from '../../db/readData';
import { writeUserData } from '../../db/writeData';
import { useNavigate } from 'react-router-dom';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { CountryHandler } from '../../types/accountSettings';
import { useTranslation } from 'react-i18next';
import {
  AccountArrowIcon,
  AccountContainer,
  AccountLabel,
  AccountSelect,
  AccountThumb,
  SelectContainer,
} from './AccountSettings.styled';
import { SaveInfoBtn } from '../EditProfile/EditProfile.styled';
import icons from '../../assets/images/sprite.svg';

const AccountSettings = () => {
  const { t } = useTranslation();
  const [databaseUser, setDatabaseUser] = useState<any>({});
  const { user } = useUser()!;
  const navigate = useNavigate();
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler: CountryHandler = value => {
    setDatabaseUser({ ...databaseUser, country: value });
  };

  useEffect(() => {
    const fetchUserFromDatabase = async () => {
      if (!user) return;
      setDatabaseUser(await readData(user.uid));
    };
    fetchUserFromDatabase();
  }, [user]);

  const saveAccountSettings = async () => {
    if (!user) return;
    try {
      await writeUserData({ ...databaseUser, uid: user.uid });
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
            <AccountSelect
              name="language"
              value={databaseUser.language}
              onChange={e =>
                setDatabaseUser({ ...databaseUser, language: e.target.value })
              }
            >
              <option value="en">English</option>
              <option value="ua">Ukrainian</option>
            </AccountSelect>
            <AccountArrowIcon>
              <use href={`${icons}#icon-down-arrow`}></use>
            </AccountArrowIcon>
          </SelectContainer>
        </AccountLabel>

        <AccountLabel>
          {t('accountsettings.defaulttheme')}
          <SelectContainer>
            <AccountSelect
              name="theme"
              value={databaseUser.theme}
              onChange={e =>
                setDatabaseUser({ ...databaseUser, theme: e.target.value })
              }
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </AccountSelect>
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
              value={databaseUser.country}
              onChange={changeHandler}
              placeholder="Select a country"
            />
            <AccountArrowIcon>
              <use href={`${icons}#icon-down-arrow`}></use>
            </AccountArrowIcon>
          </SelectContainer>
        </AccountLabel>
      </AccountContainer>
      <SaveInfoBtn type="button" onClick={saveAccountSettings}>
        {t('accountsettings.save')}
      </SaveInfoBtn>
    </AccountThumb>
  );
};

export default AccountSettings;
