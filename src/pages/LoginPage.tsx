import React, { useEffect } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { LoginPageForm } from "../components/LoginPage/LoginPageForm";
import { UseUser } from "../hooks/useUser";

const LoginPage = () => {
  const { readUser } = UseUser();

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        readUser(currentUser.uid);
      }
    });
    return () => authorize();
  }, [readUser]);

  return (
    <div>
      <h1>Login</h1>
      <LoginPageForm />
    </div>
  );
};

export default LoginPage;
