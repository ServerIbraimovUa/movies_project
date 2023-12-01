import React, { useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { AuthList } from "../auth/AuthList";
import { logout } from "../auth/logout";
import { useForm, SubmitHandler } from "react-hook-form";

interface UserAuth {
  name: string;
  email: string;
  password: string;
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
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserAuth>();

  const signup: SubmitHandler<UserAuth> = async (data) => {
    try {
      const { email, password } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(signup)}>
        <label>
          Username
          <input type="text" {...register("name", { required: true })} />
        </label>
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
        {/* <label>
          Repeat Password
          <input type="password" name="password" />
        </label> */}
        <button type="submit">Submit</button>
        <p>or sign up with social media</p>
        <AuthList />
        <button type="button" onClick={logout}>
          Sign out {user?.email}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
