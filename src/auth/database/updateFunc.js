import { readUserData } from './readFunc';
import { writeUserData } from './writeFunc';
import { getDatabase, ref, child, push, update } from 'firebase/database';

export function updateUserData({ name, email, password, imageUrl, id }) {
  const db = getDatabase();
  const newObj = {
    name,
    email,
    password,
    imageUrl,
    id,
  };

  const updates = {};
  updates['/users/' + id] = newObj;
  return update(ref(db), updates);
}
