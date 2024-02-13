import { useTranslation } from "react-i18next";
import { SignUpForm } from "../../components/SignUpPage/SignUpForm";
import { AuthWrapper, CenteredContent } from "./SignUpPage.styled";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <AuthWrapper>
      <CenteredContent>
        <NavLink to="/" className="navlink">
          Logo
        </NavLink>
        <h1 className="title">{t("layout.register")}</h1>
        <SignUpForm />
      </CenteredContent>
    </AuthWrapper>
  );
};

export default SignUpPage;
