import React, { useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { signInWithGoogle } from "../components/Social Medias/Google";
import { signInWithFacebook } from "../components/Social Medias/Facebook";
import { signInWithGithub } from "../components/Social Medias/Github";

const SignUpPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <label>
          Username
          <input type="text" name="username" />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </label>
        {/* <label>
          Repeat Password
          <input type="password" name="password" />
        </label> */}
        <button type="button" onClick={register}>
          Submit
        </button>
        <p>or sign up with social media</p>
        <ul>
          <li>
            <button onClick={signInWithGoogle}>Google</button>
          </li>
          <li>
            <button onClick={signInWithFacebook}>Facebook</button>
          </li>
          <li>
            <button onClick={signInWithGithub}>GitHub</button>
          </li>
        </ul>
        <button type="button" onClick={logout}>
          Sign out {user?.email}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
