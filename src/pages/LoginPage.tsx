import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { readUserData } from "../auth/database/readFunc";
import { LoginPageForm } from "../components/LoginPage/LoginPageForm";

interface UserSignIn {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authorize = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => authorize();
  }, []);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<UserSignIn>();

  const login: SubmitHandler<UserSignIn> = async (data) => {
    try {
      const { email, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      readUserData(userCredential.user.uid);

      console.log(userCredential);
      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginPageForm login={login} errors={errors} register={register} />
    </div>
  );
};

export default LoginPage;
