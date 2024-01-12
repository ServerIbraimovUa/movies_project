import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, auth } from "../firebase-config";
import { useUser } from "../context/UserContext";
import { UserType } from "../types/user";
import { writeUserData } from "../db/writeData";

export const SignInWithGoogle = () => {
  const { logIn } = useUser()!;

  const handleSignIn = async () => {
    try {
      const google = await signInWithPopup(auth, GoogleProvider);

      if (google.user) {
        const username = google.user.displayName || "";
        logIn({ username, uid: google.user.uid });

        const newUser = {
          uid: google.user.uid,
          username,
          language: "ua",
          theme: "light" as const,
        } as UserType;

        // записуємо нового юзера в базу даних
        writeUserData(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={handleSignIn}>
      Google
    </button>
  );
};
