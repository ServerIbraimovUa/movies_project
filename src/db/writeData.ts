import { ref, set } from 'firebase/database';
import { db } from '../firebase-config';
import { UserType } from '../types/user';

export function writeUserData({
  uid,
  username,
  imageUrl = "",
  sex = "none",
  country = "none",
  language,
  favorites = [],
  theme,
}: UserType) {
  try {
    set(ref(db, "users/" + uid), {
      username,
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
