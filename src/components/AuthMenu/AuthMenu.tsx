import Icon from "../Icon/Icon";
import { FC } from "react";
import { ButtonLogin, ButtonLoginMob } from "./AuthMenu.styled";
import { t } from "i18next";
import { NavLink } from "react-router-dom";

const AuthMenu: FC = () => {
  return (
    <>
      <ButtonLoginMob>
        <NavLink to="/login">
          {" "}
          <Icon className="icon-login" id="login" />
        </NavLink>
      </ButtonLoginMob>
      <ButtonLogin>
        <NavLink to="/login">{t("layout.login")}</NavLink>
      </ButtonLogin>
    </>
  );
};

export default AuthMenu;
