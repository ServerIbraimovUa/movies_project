import { set } from "firebase/database";
import { reference } from "../firebase-config";

export function writeUserData({
  name,
  imageUrl = "",
  sex = null,
  country = null,
  language = "ua",
  favorite = [],
}) {
  try {
    set(reference, {
      username: name,
      imageUrl,
      sex,
      country,
      language,
      favorite,
    });
  } catch (error) {
    console.log(error.message);
  }
}
