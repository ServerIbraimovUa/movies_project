import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
