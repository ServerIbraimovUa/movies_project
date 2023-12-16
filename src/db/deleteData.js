import { remove } from "firebase/database";
import { reference } from "../firebase-config";

export function deleteData() {
  try {
    remove(reference);
  } catch (error) {
    console.log(error.message);
  }
}
