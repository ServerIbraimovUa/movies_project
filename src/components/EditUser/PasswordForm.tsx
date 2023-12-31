import { useForm, SubmitHandler } from 'react-hook-form';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormPasswords, IPasswordForm } from '../../types/editProfileTypes';
import { updatePasswordSchema } from '../../schemas/updatePasswordSchema';

const PasswordForm: FC<IPasswordForm> = ({ user, show, close }) => {
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
          close
        </button>
        <form onSubmit={handleSubmit(updateUserPassword)}>
          <label>
            Write your previouse password
            {errors.password && (
              <div>
                <span>{errors.password?.message}</span>
              </div>
            )}
            <input
              type="password"
              {...register('password', { required: true })}
            />
          </label>
          <div>
            <label>
              Write your new password
              {errors.newPassword && (
                <div>
                  <span>{errors.newPassword?.message}</span>
                </div>
              )}
              <input
                type="password"
                {...register('newPassword', { required: true })}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
          <button
            onClick={() => {
              close();
              resetPasswords();
            }}
          >
            Cancel
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PasswordForm;
