import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOt5sD8GrEkW6o2tIrAYjD7Hh4eEW4U8I",
  authDomain: "movie-5e2cf.firebaseapp.com",
  databaseURL:
    "https://movie-5e2cf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-5e2cf",
  storageBucket: "movie-5e2cf.appspot.com",
  messagingSenderId: "816660778695",
  appId: "1:816660778695:web:af417d0ccf90b5bebc38e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();
export const GitHubProvider = new GithubAuthProvider();

function writeUserData(
  name: string,
  email: string,
  imageUrl: string,
  id: string,
  password: string
) {
  const db = getDatabase(app);
  // const userId = auth.currentUser?.uid
  const reference = ref(db, "users/" + id);
  set(reference, {
    username: name,
    email: email,
    password: password,
    profile_picture: imageUrl,
  });
}

console.log(1);

export const getAuthNew = () => getAuth(app);
