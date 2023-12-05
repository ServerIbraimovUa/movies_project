import React, { useState } from "react";
import { toggleClick } from "./toggleClick";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { AuthList } from "../../auth/AuthList";
import { useForm } from "react-hook-form";

interface SignUpInt {
  signup: any;
  register: any;
  errors: any;
  password: string;
}

export const SignUpForm: React.FC<SignUpInt> = ({
  signup,
  register,
  errors,
  password,
}) => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(signup) as any}>
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
