import React, { useState } from "react";
import { toggleClick } from "./toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { AuthList } from "../../auth/AuthList";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useUser } from "../../context/UserContext";
import { writeUserData } from "../../db/writeData";
import { UserType } from "../../types/user";

interface UserAuth {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUpForm = () => {
  const { logIn } = useUser()!;
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    reset,
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

      console.log(userCredential);
      
      if (userCredential.user) {
        logIn(name);

        const newUser = {
          uid: userCredential.user.uid,
          username: name,
          language: "ua",
          theme: "light" as const,
        } as UserType;
        //записуємо нового юзера в база данних
          writeUserData(newUser); 
        
      }

      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");

  return (
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
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <label>
        Repeat Password
        <input
          type={toggleInput}
          {...register("repeatPassword", {
            required: true,
            validate: (value: string) =>
              value === password || "Passwords do not match",
          })}
        />
        <span
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleIcon)
          }
        >
          {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
        </span>
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
      </label>
      <button type="submit">Submit</button>
      <p>or sign up with social media</p>
      <AuthList />
    </form>
  );
};
