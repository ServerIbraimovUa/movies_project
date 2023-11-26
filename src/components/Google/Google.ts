import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const photoURL = result.user.photoURL;

      localStorage.setItem("name", name || "");
      localStorage.setItem("email", email || "");
      localStorage.setItem("photoURL", photoURL || "");
    })
    .catch((error) => {
      console.log(error);
    });
};
