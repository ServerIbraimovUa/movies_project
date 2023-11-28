import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, auth } from "../../firebase-config";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, GoogleProvider)
  } catch (error) {
    console.log(error);
  }
};
