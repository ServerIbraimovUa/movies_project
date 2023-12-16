import { onValue } from "firebase/database";
import { reference } from "../firebase-config";

export function readData() {
  try {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  } catch (error) {
    console.log(error.message);
  }
}
