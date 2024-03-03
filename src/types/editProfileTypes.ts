import { User } from 'firebase/auth';
import { UserType } from './user';

export type FormPasswords = {
  password: string;
  newPassword: string;
};

export interface IPasswordForm {
  user: User | null;
  show: boolean;
  close(): void;
}

export type FormValues = {
  name?: string;
  photoURL?: string;
  email?: string;
  password?: string;
  newPassword?: string;
};

export interface IImageUpload {
  currentAvatarURL: string;
  onAvatarChanged: (file: File) => void;
}

export interface ISocials {
  el: string;
  databaseUser: UserType;
  setDatabaseUser: (object: UserType) => void;
}
