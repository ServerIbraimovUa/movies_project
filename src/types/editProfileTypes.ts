import { User } from 'firebase/auth';

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

export interface INameForm {
  user: User;
}

export interface IImageUpload {
  currentAvatarURL: string;
  onAvatarChanged: (file: File) => void;
}
