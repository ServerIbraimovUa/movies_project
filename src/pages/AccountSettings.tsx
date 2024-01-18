import { useEffect, useMemo, useState } from 'react';
import { useUser } from '../context/UserContext';
import { readData } from '../db/readData';
import { writeUserData } from '../db/writeData';
import { useNavigate } from 'react-router-dom';
import {
  failedNotification,
  successNotification,
} from '../services/notifications';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { CountryHandler } from '../types/accountSettings';
import { useTranslation } from 'react-i18next';

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
    <div>
      <label>
      {t('accountsettings.defaultlanguage')}
        <select
          name="language"
          value={databaseUser.language}
          onChange={e =>
            setDatabaseUser({ ...databaseUser, language: e.target.value })
          }
        >
          <option value="en">EN</option>
          <option value="ua">UA</option>
        </select>
      </label>
      <label>
      {t('accountsettings.defaulttheme')}
        <select
          name="theme"
          value={databaseUser.theme}
          onChange={e =>
            setDatabaseUser({ ...databaseUser, theme: e.target.value })
          }
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>
      <label>
      {t('accountsettings.country')}
        <Select
          options={options}
          value={databaseUser.country}
          onChange={changeHandler}
          placeholder="Select a country"
        />
      </label>
      <button type="button" onClick={saveAccountSettings}>
      {t('accountsettings.save')}
      </button>
    </div>
  );
};

export default AccountSettings;
