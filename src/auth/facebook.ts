import { signInWithPopup } from "firebase/auth";
import { FacebookProvider, auth } from "../firebase-config";

export const signInWithFacebook = async () => {
  try {
    await signInWithPopup(auth, FacebookProvider)
  } catch (error) {
    console.log(error);
  }
};
