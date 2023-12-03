import { signInWithPopup } from "firebase/auth";
import { GitHubProvider, auth } from "../firebase-config";

export const signInWithGithub = async () => {
  try {
    await signInWithPopup(auth, GitHubProvider)
  } catch (error) {
    console.log(error);
  }
};
