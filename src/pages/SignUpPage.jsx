import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpForm } from "../components/SignUpPage/SignUpForm";
import { useUser } from "../context/UserContext";
import { useTranslation } from "react-i18next";

const SignUpPage = () => {
  const { setUser, isLoggedIn } = useUser();
  const { t } = useTranslation();

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        const user = currentUser.uid;
        console.log(user);
        setUser(user);
        isLoggedIn(true);
      }
      setUser(null);
    });

    return () => authorize();
  }, [setUser,isLoggedIn]);

  return (
    <div>
      <h1>{t("signup.signup")}</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
