import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOt5sD8GrEkW6o2tIrAYjD7Hh4eEW4U8I',
  authDomain: 'movie-5e2cf.firebaseapp.com',
  projectId: 'movie-5e2cf',
  storageBucket: 'movie-5e2cf.appspot.com',
  messagingSenderId: '816660778695',
  appId: '1:816660778695:web:af417d0ccf90b5bebc38e2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const getAuthNew = () => getAuth(app);
