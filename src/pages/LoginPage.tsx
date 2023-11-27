import React, { useState } from "react";
import { auth } from "../firebase-config";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signInWithGoogle } from "../components/Social Medias/Google";
import { signInWithFacebook } from "../components/Social Medias/Facebook";
import { signInWithGithub } from "../components/Social Medias/Github";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
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
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </label>
        <button type="button" onClick={login}>
          Log In
        </button>
        <p>or login with social media</p>
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

export default LoginPage;
