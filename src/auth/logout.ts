import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export const logout = async () => {
  try {
    await signOut(auth);
<<<<<<< HEAD
=======
    console.log('succes')
>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
  } catch (error) {
    console.log(error);
  }
};
