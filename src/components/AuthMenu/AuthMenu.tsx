import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AuthMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/register">{t('layout.register')}</NavLink>
      <NavLink to="/login">{t('layout.login')}</NavLink>
    </>
  );
};

export default AuthMenu;
