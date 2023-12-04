import { User, updateProfile } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
import { FC } from 'react';

type FormValues = {
  name?: string;
  photoURL?: string;
  email?: string;
  password?: string;
  newPassword?: string;
};

interface INameForm {
  user: User;
}

const NameForm: FC<INameForm> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const updateUserName: SubmitHandler<FormValues> = async ({ name }) => {
    if (!user) return;

    await updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        return successNotification('You have updated your name!');
      })
      .catch(error => {
        return failedNotification(`Oops, smth went wrong: ${error.message}`);
      });
  };

  return (
    <form onSubmit={handleSubmit(updateUserName)}>
      <input
        defaultValue={user?.displayName || ''}
        {...register('name', { required: true })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
