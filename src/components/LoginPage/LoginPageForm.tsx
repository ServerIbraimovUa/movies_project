import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthList } from "../../auth/AuthList";
import { toggleClick } from "../SignUpPage/toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

interface LoginInt {
  login: any;
  register: any;
  errors: any;
}

export const LoginPageForm: React.FC<LoginInt> = ({
  login,
  register,
  errors,
}) => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const { handleSubmit } = useForm();
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
