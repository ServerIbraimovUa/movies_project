import React, { useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useForm, SubmitHandler } from "react-hook-form";
import { writeUserData } from "../auth/database/writeFunc";
import { SignUpForm } from "../components/SignUpPage/SignUpForm";

export interface UserAuth {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpPage = () => {
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
    watch,
  } = useForm<UserAuth>({
    mode: "onTouched",
  });

  const signup: SubmitHandler<UserAuth> = async (data) => {
    try {
      const { name, email, password } = data;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      writeUserData({
        id: user.uid,
        name,
        email,
        password,
        profile_picture: user.photoURL,
      });

      console.log(userCredential);

      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");

  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm
        signup={signup}
        register={register}
        errors={errors}
        password={password}
      />
    </div>
  );
};

export default SignUpPage;
