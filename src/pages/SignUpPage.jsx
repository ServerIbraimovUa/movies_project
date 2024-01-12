import { SignUpForm } from "../components/SignUpPage/SignUpForm";
import { useTranslation } from "react-i18next";

const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <div>
            <h1>{t("signup.signup")}</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
