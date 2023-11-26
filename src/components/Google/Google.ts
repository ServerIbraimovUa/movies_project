import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
   signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      console.log(error.message);
    })
}
