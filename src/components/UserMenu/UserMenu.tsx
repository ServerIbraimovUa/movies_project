import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout } from "../../auth/logout";
//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/favorites">{t("layout.favorite")}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <NavLink to="/settings">Username</NavLink>
        <button type="button" onClick={logout}>
          {t("layout.logout")}
        </button>
      </div>
    </>
  );
};

export default UserMenu;
