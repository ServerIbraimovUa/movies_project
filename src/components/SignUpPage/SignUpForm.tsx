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
import { useTranslation } from "react-i18next";
import {
  AuthText,
  EyeIcon,
  Input,
  InputWrapper,
  SignButton,
  StyledNavLink,
  SvgSpan,
} from "./SignUpForm.styled";

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
  const [toggleSecondIcon, setToggleSecondIcon] = useState(false);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isValid },
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
        logIn({ username: name, uid: userCredential.user.uid });

        const newUser = {
          uid: userCredential.user.uid,
          username: name,
          language: "ua",
          theme: "light" as const,
        } as UserType;
        // записуємо нового юзера в базу даних
        writeUserData(newUser);
      }

      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(signup)}>
      <InputWrapper>
        <Input
          type="text"
          {...register("name", { required: true })}
          placeholder={t("signform.user")}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="email"
          {...register("email", { required: true })}
          placeholder={t("signform.email")}
        />
        {errors.email && <span> {t("signform.this")}</span>}
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
      <InputWrapper>
        <Input
          type={toggleInput}
          {...register("repeatPassword", {
            required: true,
            validate: (value: string) =>
              value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="form-control"
        />
        <SvgSpan
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleSecondIcon)
          }
        >
          {toggleSecondIcon ? (
            <EyeIcon as={RiEyeOffLine} />
          ) : (
            <EyeIcon as={RiEyeLine} />
          )}
        </SvgSpan>
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
      </InputWrapper>

      <SignButton
        type="submit"
        disabled={!isValid}
        style={{
          backgroundColor: isValid ? "rgb(144, 64, 246)" : "#CFC5DC",
        }}
      >
        {t("signform.submit")}
      </SignButton>
      <AuthText>{t("signform.orsign")}</AuthText>
      <AuthList />
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </form>
  );
};
