import { ref, push, set, child } from "firebase/database";
import { db } from "../firebase-config";
import { UserType } from "../types/user";

export function updateData({
  uid,
  name,
  imageUrl = "",
  sex = "none",
  country = "none",
  language = "ua",
  favorites = [],
  theme = "light",
}: UserType) {
  const postData = {
    username: name,
    profile_picture: imageUrl,
    sex,
    country,
    language,
    favorites,
    theme,
  };

  const newPostKey = push(child(ref(db), "users")).key;

  set(ref(db, `users/${newPostKey}`), postData);

  set(ref(db, `user-posts/${uid}/${newPostKey}`), postData);
}
