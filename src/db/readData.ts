import { onValue, ref } from "firebase/database";
import { db } from "../firebase-config";

export function readData(uid: string) {
  try {
    onValue(ref(db, "users/" + uid), (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
