import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { storage } from '../firebase-config';

export const upload = async (path: string, content: Blob) => {
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, content);
  return await getDownloadURL(fileRef);
};

export const deleteImage = async (path: string) => {
  const imgRef = ref(storage, path);
  await deleteObject(imgRef);
  return;
};
