import { initializeApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyBOt5sD8GrEkW6o2tIrAYjD7Hh4eEW4U8I',
  authDomain: 'movie-5e2cf.firebaseapp.com',
  databaseURL:
    'https://movie-5e2cf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'movie-5e2cf',
  storageBucket: 'movie-5e2cf.appspot.com',
  messagingSenderId: '816660778695',
  appId: '1:816660778695:web:af417d0ccf90b5bebc38e2',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();
export const GitHubProvider = new GithubAuthProvider();
export const db = getDatabase(app);
export const userId = auth.currentUser?.uid;
export const storage = getStorage();
export const reference = ref(db, "users/" + userId);

