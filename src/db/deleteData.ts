import { ref, remove } from 'firebase/database';
import { db } from '../firebase-config';

export function deleteData(uid: string) {
  try {
    return remove(ref(db, 'users/' + uid));
  } catch (error: any) {
    console.log(error.message);
  }
}
