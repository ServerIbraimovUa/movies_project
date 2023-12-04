import { readUserData } from "./readFunc";
import { writeUserData } from "./writeFunc";

export function updateUserData({ name, email, password, imageUrl, id }) {
  const oldUserData = readUserData(id);

  const newObj = {
    ...oldUserData,
    name,
    email,
    password,
    imageUrl,
    id,
  };

  writeUserData(newObj);
}
