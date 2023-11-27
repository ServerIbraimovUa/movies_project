import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
