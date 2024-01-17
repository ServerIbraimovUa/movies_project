import { ref, set } from 'firebase/database';
import { db } from '../firebase-config';
import { UserType } from '../types/user';

export function writeUserData({
  uid,
  username,
  imageUrl = '',
  sex = 'none',
  country = {},
  language,
  favorites = [],
  theme,
  socials = {},
}: UserType) {
  try {
    return set(ref(db, 'users/' + uid), {
      username,
      imageUrl,
      sex,
      country,
      language,
      favorites,
      theme,
      socials,
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
