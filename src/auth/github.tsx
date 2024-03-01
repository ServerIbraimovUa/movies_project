import { signInWithPopup } from "firebase/auth";
import { GitHubProvider, auth } from "../firebase-config";
import { writeUserData } from "../db/writeData";
import { UserType } from "../types/user";
import { useUser } from "../context/UserContext";
import { AuthBtn } from "./AuthList.styled";
import Icon from "../components/Icon/Icon";

export const SignInWithGithub = () => {
  const { logIn } = useUser()!;

  const handleSignIn = async () => {
    try {
      const github = await signInWithPopup(auth, GitHubProvider);

      if (github.user) {
        const username = github.user.displayName || "";
        logIn({ username, uid: github.user.uid });

        const newUser = {
          uid: github.user.uid,
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
      <Icon id="auth-github" className="icon-auth" />
    </AuthBtn>
  );
};
