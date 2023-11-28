import { auth } from '../firebase-config';
import { deleteUser, onAuthStateChanged } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  failedNotification,
  successNotification,
} from '../services/notifications';
import { useState } from 'react';

const Settings = () => {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState<any>(null);

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
  });

  const navigate = useNavigate();

  const onSubmit = async (form: any) => {
    const credential = EmailAuthProvider.credential(user.email, form.password);
    await reauthenticateWithCredential(user, credential)
      .then(() => {
        deleteUser(user);
        navigate('/');
        successNotification('You have deleted your account');
      })
      .catch(() => {
        failedNotification('Write correct password');
      });
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <p>
        You've just entered the danger zone! If you would like to continue and
        remove your account, you can do so by entering your password below and
        confirming the prompts.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="password"
          {...register('password', {
            required: true,
          })}
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Settings;
