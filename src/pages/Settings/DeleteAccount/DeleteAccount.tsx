import { auth } from '../../../firebase-config';
import { User, deleteUser, onAuthStateChanged } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  failedNotification,
  successNotification,
} from '../../../services/notifications';
import { useEffect, useState } from 'react';
import { readData } from '../../../db/readData';
import { deleteData } from '../../../db/deleteData';
import { logout } from '../../../auth/logout';
import { useUser } from '../../../context/UserContext';
import { deleteImage } from '../../../services/image';
import {
  DeleteAccountContainer,
  DeleteAccountThumb,
  DeleteForm,
  DeleteInfoThumb,
  DeleteInput,
  DeleteText,
  DeleteTitle,
} from './DeleteAccount.styled';
import { SettingsSubmitBtn } from '../Settings.styled';

type FormValues = {
  password: string;
};

const DeleteAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { logOut } = useUser()!;
  const { t } = useTranslation();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [databaseUser, setDatabaseUser] = useState<any>({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLogOut = () => {
    //firebase
    logout();
    //context
    logOut();
  };

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setCurrentUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const fetchUserFromDatabase = async () => {
      if (!auth.currentUser) return;
      setDatabaseUser(await readData(auth.currentUser.uid));
    };
    fetchUserFromDatabase();
  }, [currentUser]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async ({ password }) => {
    if (!currentUser) return;
    try {
      const credential = EmailAuthProvider.credential(
        currentUser.email || '',
        password
      );
      await reauthenticateWithCredential(currentUser, credential);
      if (databaseUser.imageUrl) {
        await deleteImage(databaseUser.imageUrl);
      }
      await deleteData(currentUser.uid);
      await deleteUser(currentUser);
      handleLogOut();
      navigate('/');
      successNotification('You have just deleted your account');
    } catch (error) {
      setIsError(true);
      failedNotification('Wrong password!');
    }
  };
  return (
    <DeleteAccountContainer>
      <DeleteInfoThumb>
        <DeleteTitle>{t('delete.dellaccount')}</DeleteTitle>
        <DeleteText>{t('delete.dellparagraf')}</DeleteText>
      </DeleteInfoThumb>
      <DeleteForm onSubmit={handleSubmit(onSubmit)}>
        <DeleteInput
          type="password"
          placeholder="password"
          {...register('password', {
            required: true,
          })}
          onChange={e => {
            if (e.target.value) {
              setIsDisabled(false);
              return;
            }
            setIsDisabled(true);
          }}
          className={`${isError ? 'error' : ''} `}
        />
        <DeleteAccountThumb>
          <SettingsSubmitBtn type="submit" disabled={isDisabled}>
            {t('delete.confirm')}
          </SettingsSubmitBtn>
        </DeleteAccountThumb>
      </DeleteForm>
    </DeleteAccountContainer>
  );
};

export default DeleteAccount;
