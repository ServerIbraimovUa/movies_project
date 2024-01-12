import React, { useState } from "react";
import { AuthList } from "../../auth/AuthList";
import { toggleClick } from "../SignUpPage/toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useUser } from "../../context/UserContext";
import { readData } from "../../db/readData";
import { useTranslation } from "react-i18next";

interface UserSignIn {
  email: string;
  password: string;
}

export const LoginPageForm = () => {
  const { t } = useTranslation();
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

        logIn({ username, uid: userCredential.user.uid });
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
      {t("login.email")}
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>{t("login.this")}</span>}
      </label>
      <label>  
        {t("login.password")}
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
        {errors.password && <span>{t("login.this")}</span>}
      </label>
      <button type="submit">{t("login.log-in")}</button>
      <p>{t("login.socialmedia")}</p>
      <AuthList />
    </form>
  );
};
