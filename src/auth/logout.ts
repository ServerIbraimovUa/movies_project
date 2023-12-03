import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
