import { signInWithFacebook } from "./facebook";
import { signInWithGithub } from "./github";
import { signInWithGoogle } from "./google";

export const AuthList = () => {
  const authSocial = [
    { element: signInWithGoogle, name: "Google" },
    { element: signInWithFacebook, name: "Facebook" },
    { element: signInWithGithub, name: "Github" },
  ];

  return (
    <ul>
      {authSocial.map(({ element, name }, index) => (
        <li key={index}>
          <button type="button" onClick={element}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
