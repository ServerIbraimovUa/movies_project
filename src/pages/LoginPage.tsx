import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import { LoginPageForm } from "../components/LoginPage/LoginPageForm";

const LoginPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => authorize();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <LoginPageForm />
    </div>
  );
};

export default LoginPage;
