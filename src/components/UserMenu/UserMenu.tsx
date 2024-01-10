import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import { logout } from "../../auth/logout";

import { useUser } from "../../context/UserContext";

//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { userName, logOut } = useUser()!;
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleLogOut = () => {
    //firebase
    logout();
    //context
    logOut();
  };

  return (
    <>
      <NavLink to="/favorites">{t("layout.favorite")}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <button type="button" onClick={handleShow}>
          {userName}
        </button>
        <UserModal close={handleClose} show={show} />
        <button type="button" onClick={handleLogOut}>
          {t("layout.logout")}
        </button>
      </div>
    </>
  );
};

export default UserMenu;
