import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';
import { logout } from '../../auth/logout';

import { useUser } from '../../context/UserContext';
import { readData } from '../../db/readData';

//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { user, logOut } = useUser()!;
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [databaseUser, setDatabaseUser] = useState<any>({});

  const handleShow = () => {
    if (window.innerWidth <= 1023) {
      return;
    }
    setShow(true);
    const fetchUserFromDatabase = async () => {
      if (!user) return;
      setDatabaseUser(await readData(user.uid));
    };
    fetchUserFromDatabase();
  };
  const handleClose = () => setShow(false);
  const handleLogOut = () => {
    //firebase
    logout();
    //context
    logOut();
  };

  // const {username} = user
  console.log(user);
  return (
    <>
      <NavLink to="/favorites">{t('layout.favorite')}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <button type="button" onClick={handleShow}>
          {user.username}
        </button>
        <button type="button" onClick={handleLogOut}>
          {t('layout.logout')}
        </button>
      </div>
      <UserModal close={handleClose} show={show} databaseUser={databaseUser} />
    </>
  );
};

export default UserMenu;
