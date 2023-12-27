import { updateProfile } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
import { FC } from 'react';
import { FormValues, INameForm } from '../../types/editProfileTypes';

const NameForm: FC<INameForm> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const updateUserName: SubmitHandler<FormValues> = async ({ name }) => {
    if (!user) return;
    try {
      await updateProfile(user, {
        displayName: name,
      });
      successNotification('You have updated your name!');
    } catch {
      failedNotification("Can't update your name");
    }
  };

  return (
    <form onSubmit={handleSubmit(updateUserName)}>
      {errors.name && <span>{errors.name.message}</span>}
      <input
        defaultValue={user?.displayName || ''}
        {...register('name', { required: true })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
