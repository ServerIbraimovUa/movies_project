import { ref, remove } from "firebase/database";
import { db } from "../../firebase-config";

export function deleteUserData(id) {
  remove(ref(db, "users/" + id));
}
