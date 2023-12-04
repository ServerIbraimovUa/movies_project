import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthList } from "../auth/AuthList";
import { useForm, SubmitHandler } from "react-hook-form";
import { readUserData } from "../auth/database/readFunc";

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
    handleSubmit,
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
      <form onSubmit={handleSubmit(login)}>
        <label>
          Email
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <button type="submit">Log In</button>
        <p>or login with social media</p>
        <AuthList />
      </form>
    </div>
  );
};

export default LoginPage;
