import { ref, push, set, child } from 'firebase/database';
import { db } from '../firebase-config';
import { UserType } from '../types/user';

export function updateData({
  uid,
  username,
  imageUrl = '',
  sex = 'none',
  country = { value: '', label: '' },
  language = 'ua',
  favorites = [],
  theme = 'light',
}: UserType) {
  const postData = {
    username,
    imageUrl,
    sex,
    country,
    language,
    favorites,
    theme,
  };

  const newPostKey = push(child(ref(db), 'users')).key;

  set(ref(db, `users/${newPostKey}`), postData);

  set(ref(db, `user-posts/${uid}/${newPostKey}`), postData);
}
