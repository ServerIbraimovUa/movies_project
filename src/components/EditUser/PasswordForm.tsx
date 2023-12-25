import { useForm, SubmitHandler } from 'react-hook-form';
import {
  EmailAuthProvider,
  User,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { FC } from 'react';

type FormValues = {
  name?: string;
  photoURL?: string;
  email?: string;
  password?: string;
  newPassword?: string;
};

interface IPasswordForm {
  user: User | null;
  setIsUpdate: (update: boolean) => void;
}

const PasswordForm: FC<IPasswordForm> = ({ user, setIsUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const updateUserPassword: SubmitHandler<FormValues> = async ({
    password,
    newPassword,
  }) => {
    if (!user || !password || !newPassword) return;
    const credential = EmailAuthProvider.credential(user.email || '', password);
    await reauthenticateWithCredential(user, credential).then(() => {
      updatePassword(user, newPassword)
        .then(() => {
          alert('You have changed your password');
          // ...
          return;
        })
        .catch(error => {
          // An error occurred
          // ...
        })
        .finally(() => setIsUpdate(false));
    });

    console.log(credential);
  };

  return (
    <form onSubmit={handleSubmit(updateUserPassword)}>
      <input type="password" {...register('password', { required: true })} />
      <div>
        <input
          type="password"
          {...register('newPassword', { required: true })}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordForm;
