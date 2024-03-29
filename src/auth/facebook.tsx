import { signInWithPopup } from "firebase/auth";
import { FacebookProvider, auth } from "../firebase-config";
import { useUser } from "../context/UserContext";
import { UserType } from "../types/user";
import { writeUserData } from "../db/writeData";
import { AuthBtn } from "./AuthList.styled";
import Icon from "../components/Icon/Icon";

export const SignInWithFacebook = () => {
  const { logIn } = useUser()!;

  const handleSignIn = async () => {
    try {
      const facebook = await signInWithPopup(auth, FacebookProvider);

      if (facebook.user) {
        const username = facebook.user.displayName || "";
        logIn({ username, uid: facebook.user.uid });

        const newUser = {
          uid: facebook.user.uid,
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
    <AuthBtn
      type="button"
      onClick={handleSignIn}
      className="btn bg-transparent"
    >
      <Icon id="auth-facebook" className="icon-auth" />
    </AuthBtn>
  );
};
