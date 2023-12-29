import React, { useEffect,  } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpForm } from "../components/SignUpPage/SignUpForm";
import { UseUser } from "../hooks/useUser";

const SignUpPage = () => {
  const { setUser, readUser } = UseUser();

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const user = readUser(currentUser.uid);
        console.log(user)
        setUser(user);
      }
      setUser(null);
    });

    return () => authorize();
  }, [setUser, readUser]);

  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
