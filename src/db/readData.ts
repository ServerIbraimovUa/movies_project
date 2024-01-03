import { onValue, ref } from "firebase/database";
import { db } from "../firebase-config";

export function readData(uid: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const dataRef = ref(db, "users/" + uid);

    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      console.log(error.message);
      reject(error.message);
    });
  });
}