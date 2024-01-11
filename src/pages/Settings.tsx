import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="personal-info">{t("settings.edit")}</Link>
          </li>
          <li>
            <Link to="account">{t("settings.account")}</Link>
          </li>
          <li>
            <Link to="account-deletion">{t("settings.delete")}</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
