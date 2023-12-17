import { ref, set } from "firebase/database";
import { db } from "../firebase-config";
import { UserType } from "../types/user";

export function writeUserData({
  uid,
  name,
  imageUrl = "",
  sex = "none",
  country = "none",
  language = "ua",
  favorites = [],
  theme = "light",
}: UserType) {
  try {
    set(ref(db, "users/" + uid), {
      username: name,
      imageUrl,
      sex,
      country,
      language,
      favorites,
      theme,
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
