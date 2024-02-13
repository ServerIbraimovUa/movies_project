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
import {
  EyeIcon,
  Input,
  InputWrapper,
  SignButton,
  StyledNavLink,
  SvgSpan,
} from "../SignUpPage/SignUpForm.styled";

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
    formState: { errors, isValid },
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
      } catch (error) {}
      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <InputWrapper>
        <Input
          type="email"
          {...register("email", { required: true })}
          placeholder={t("login.email")}
        />
        {errors.email && <span> {t("login.this")}</span>}
      </InputWrapper>
      <InputWrapper>
        <Input
          type={toggleInput}
          {...register("password", { required: true })}
          placeholder="Password"
          className="form-control"
        />
        <SvgSpan
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleIcon)
          }
        >
          {toggleIcon ? (
            <EyeIcon as={RiEyeOffLine} />
          ) : (
            <EyeIcon as={RiEyeLine} />
          )}
        </SvgSpan>
        {errors.password && <span>{errors.password.message}</span>}
      </InputWrapper>
      <SignButton
        type="submit"
        disabled={!isValid}
        style={{
          backgroundColor: isValid ? "rgb(144, 64, 246)" : "#CFC5DC",
        }}
      >
        {t("login.log-in")}
      </SignButton>
      <p>{t("login.socialmedia")}</p>
      <AuthList />
      <StyledNavLink to="/register">Register</StyledNavLink>
    </form>
  );
};
