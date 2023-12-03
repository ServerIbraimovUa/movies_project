import React, { useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { AuthList } from "../auth/AuthList";
import { useForm, SubmitHandler } from "react-hook-form";
import { writeUserData } from "../auth/database/writeFunc";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

interface UserAuth {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

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
    watch,
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
      const { user } = userCredential;

      writeUserData({
        id: user.uid,
        name,
        email,
        password,
        profile_picture: user.photoURL,
      });

      console.log(userCredential);

      reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const toggleClick = (
    toggle: string,
    setInput: {
      (value: React.SetStateAction<string>): void;
      (arg0: string): any;
    },
    setIcon: {
      (value: React.SetStateAction<boolean>): void;
      (arg0: boolean): void;
    }
  ) => {
    if (toggle === "password") {
      setIcon(true);
      return setInput("text");
    }
    if (toggle === "text") {
      setIcon(false);
      return setInput("password");
    }
  };

  const password = watch("password", "");
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
              validate: (value) =>
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
          {errors.repeatPassword && (
            <span>{errors.repeatPassword.message}</span>
          )}
        </label>
        <button type="submit">Submit</button>
        <p>or sign up with social media</p>
        <AuthList />
      </form>
    </div>
  );
};

export default SignUpPage;
