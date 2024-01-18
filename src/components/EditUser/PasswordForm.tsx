import { useForm, SubmitHandler } from 'react-hook-form';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormPasswords, IPasswordForm } from '../../types/editProfileTypes';
import { updatePasswordSchema } from '../../schemas/updatePasswordSchema';
import { useTranslation } from 'react-i18next';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { toggleClick } from '../SignUpPage/toggleClick';

const PasswordForm: FC<IPasswordForm> = ({ user, show, close }) => {
  const { t } = useTranslation();
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormPasswords>({ resolver: yupResolver(updatePasswordSchema) });

  const updateUserPassword: SubmitHandler<FormPasswords> = async ({
    password,
    newPassword,
  }) => {
    if (!user || !password || !newPassword) return;
    const credential = EmailAuthProvider.credential(user.email || '', password);
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      successNotification('You have changed your password');
      close();
      resetPasswords();
    } catch {
      failedNotification("Can't update password");
    }

    console.log(credential);
  };

  const resetPasswords = () => {
    reset({
      password: '',
      newPassword: '',
    });
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        close();
        resetPasswords();
      }}
    >
      <Modal.Body>
        <button
          onClick={() => {
            close();
            resetPasswords();
          }}
        >
          {t('edit.close')}
        </button>
        <p>{t('edit.if')}</p>
        <form onSubmit={handleSubmit(updateUserPassword)}>
          <label>
            {t('edit.write')}
            {errors.password && (
              <div>
                <span>{errors.password?.message}</span>
              </div>
            )}
            <input
              type={toggleInput}
              {...register('password', { required: true })}
            />
            <span
              onClick={() =>
                toggleClick(toggleInput, setToggleInput, setToggleIcon)
              }
            >
              {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </label>
          <div>
            <label>
              {t('edit.writenew')}
              {errors.newPassword && (
                <div>
                  <span>{errors.newPassword?.message}</span>
                </div>
              )}
              <input
                type={toggleInput}
                {...register('newPassword', { required: true })}
              />
              <span
                onClick={() =>
                  toggleClick(toggleInput, setToggleInput, setToggleIcon)
                }
              >
                {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </label>
          </div>
          <button type="submit">{t('edit.submit')}</button>
          <button
            onClick={() => {
              close();
              resetPasswords();
            }}
          >
            {t('edit.cancle')}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PasswordForm;
