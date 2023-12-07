import React, { useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { SignUpForm } from "../components/SignUpPage/SignUpForm";

const SignUpPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => authorize();
  }, []);

  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
