import { useTranslation } from "react-i18next";
import { LoginPageForm } from "../../components/LoginPage/LoginPageForm";
import { AuthWrapper, CenteredContent } from "../SignUpPage/SignUpPage.styled";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <AuthWrapper>
      <CenteredContent>
        <NavLink to="/" className="navlink">
          Logo
        </NavLink>
        <h1 className="title">{t("login.login")}</h1>
        <LoginPageForm />
      </CenteredContent>
    </AuthWrapper>
  );
};

export default LoginPage;
