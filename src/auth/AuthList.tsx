import { ListUl } from "./AuthList.styled";
import { SignInWithFacebook } from "./facebook";
import { SignInWithGithub } from "./github";
import { SignInWithGoogle } from "./google";

export const AuthList = () => {
  const authSocial = [
    { element: <SignInWithFacebook /> },
    { element: <SignInWithGoogle /> },
    { element: <SignInWithGithub /> },
  ];

  return (
    <ListUl>
      {authSocial.map(({ element }, index) => (
        <li key={index}>{element}</li>
      ))}
    </ListUl>
  );
};
