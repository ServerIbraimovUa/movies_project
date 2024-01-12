import { useTranslation } from "react-i18next";
import { LoginPageForm } from "../components/LoginPage/LoginPageForm";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("login.login")}</h1>
      <LoginPageForm />
    </div>
  );
};

export default LoginPage;
