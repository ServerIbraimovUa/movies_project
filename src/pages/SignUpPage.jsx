import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpForm } from "../components/SignUpPage/SignUpForm";
import { UseUser } from "../hooks/useUser";

const SignUpPage = () => {
  const { setUser } = UseUser();

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        const user = currentUser.uid;
        console.log(user);
        setUser(user);
      }
      setUser(null);
    });

    return () => authorize();
  }, [setUser]);

  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
