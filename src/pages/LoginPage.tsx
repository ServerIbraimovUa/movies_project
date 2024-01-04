import React, { useEffect } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { LoginPageForm } from "../components/LoginPage/LoginPageForm";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const { readUser } = useUser() || {};

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && readUser) {
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
