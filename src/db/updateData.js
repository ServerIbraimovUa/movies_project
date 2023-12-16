import { ref, push, set, child } from "firebase/database";
import { db, reference, userId } from "../firebase-config";

export function updateData({
  name,
  imageUrl = "",
  sex = null,
  country = null,
  language = "ua",
  favorite = [],
}) {
  const postData = {
    username: name,
    profile_picture: imageUrl,
    sex,
    country,
    language,
    favorite,
  };

  const newPostKey = push(child(reference)).key;

  set(ref(db, `users/${newPostKey}`), postData);

  set(ref(db, `user-posts/${userId}/${newPostKey}`), postData);
}
