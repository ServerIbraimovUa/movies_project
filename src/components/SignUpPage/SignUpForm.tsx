import React, { useState } from "react";
import { toggleClick } from "./toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { AuthList } from "../../auth/AuthList";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

interface UserAuth {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUpForm = () => {
  const { t } = useTranslation();
  // const { createUser } = useUser();
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
      console.log(data);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);

      // createUser({
      //   name,
      //   theme: "light",
      //   language: "ua",
      //   uid: userCredential.user.uid,
      // });

      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(signup)}>
      <label>
      {t("signform.user")}
        <input type="text" {...register("name", { required: true })} />
      </label>
      <label>
      {t("signform.email")}
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>{t("signform.this")}</span>}
      </label>
      <label>
      {t("signform.password")}
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
      {t("signform.repeat")}
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
      <button type="submit">{t("signform.submit")}</button>
      <p>{t("signform.orsign")}</p>
      <AuthList />
    </form>
  );
};
