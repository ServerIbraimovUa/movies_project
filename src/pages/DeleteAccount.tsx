import { auth } from '../firebase-config';
import { User, deleteUser, onAuthStateChanged } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  failedNotification,
  successNotification,
} from '../services/notifications';
import { useEffect, useState } from 'react';

type FormValues = {
  password: string;
};

const DeleteAccount = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const { t } = useTranslation();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(user);
    });
  }, []);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async ({ password }) => {
    if (!user) return;

    const credential = EmailAuthProvider.credential(user.email || '', password);
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
      <h1>{t('delete.dellaccount')}</h1>
      <p>{t('delete.dellparagraf')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="password"
          {...register('password', {
            required: true,
          })}
        />
        <button type="submit">{t('delete.confirm')}</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
