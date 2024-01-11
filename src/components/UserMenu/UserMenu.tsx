import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import { logout } from "../../auth/logout";
// import { UseUser } from "../../hooks/useUser";
import { auth } from "../../firebase-config";

//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  // const { readUser } = UseUser();
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  let userName = null;
  const uid = auth.currentUser?.uid;
  // if (uid) {
  //   readUser(uid)
  //     .then((user) => {
  //       if (user) {
  //         userName = user.name;
  //       }
  //     })
  //     .catch((error: any) => {
  //       console.log(error.message);
  //     });
  // }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <NavLink to="/favorites">{t("layout.favorite")}</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <button type="button" onClick={handleShow}>
          {userName}
        </button>
        <UserModal close={handleClose} show={show} />
        <button type="button" onClick={logout}>
          {t("layout.logout")}
        </button>

      </div>
    </>
  );
};

export default UserMenu;
