import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/favorites">{t('layout.favorite')}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <NavLink to='/settings'>{t('layout.username')}</NavLink>
        <button>{t('layout.logout')}</button>
      </div>
    </>
  );
};

export default UserMenu;
