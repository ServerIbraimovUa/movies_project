import { SignInWithFacebook } from "./facebook";
import { SignInWithGithub } from "./github";
import { SignInWithGoogle } from "./google";

export const AuthList = () => {
  const authSocial = [
    { element: <SignInWithGoogle /> },
    { element: <SignInWithFacebook /> },
    { element: <SignInWithGithub /> },
  ];

  return (
    <ul>
      {authSocial.map(({ element }, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};
