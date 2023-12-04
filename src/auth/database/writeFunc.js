import { ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export function writeUserData({ name, email, profile_picture, password, id }) {
  const reference = ref(db, "users/" + id);
  set(reference, {
    username: name,
    email,
    password,
    profile_picture,
  });
}
