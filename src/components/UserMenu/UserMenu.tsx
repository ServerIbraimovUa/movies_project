import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import UserModal from '../UserModal/UserModal';
//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <NavLink to="/favorites">{t('layout.favorite')}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <button type="button" onClick={handleShow}>
          {t('layout.username')}
        </button>
        <UserModal close={handleClose} show={show} />
        <button>{t('layout.logout')}</button>
      </div>
    </>
  );
};

export default UserMenu;
