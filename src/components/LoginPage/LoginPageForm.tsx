import React, { useState } from "react";
import { AuthList } from "../../auth/AuthList";
import { toggleClick } from "../SignUpPage/toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useUser } from "../../context/UserContext";
import { readData } from "../../db/readData";

interface UserSignIn {
  email: string;
  password: string;
}

export const LoginPageForm = () => {
  const { logIn } = useUser()!;
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const {
    handleSubmit,
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

      try {
        const user = await readData(userCredential.user.uid);
        console.log(user);
        const { username } = user;

        logIn(username);
      } catch (error) {
        
      }
      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <label>
        Email
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password
        <input
          type={toggleInput}
          {...register("password", { required: true })}
        />
        <span
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleIcon)
          }
        >
          {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
        </span>
        {errors.password && <span>This field is required</span>}
      </label>
      <button type="submit">Log In</button>
      <p>or login with social media</p>
      <AuthList />
    </form>
  );
};
