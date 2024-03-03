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
} from '../../../services/notifications';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormPasswords, IPasswordForm } from '../../../types/editProfileTypes';
import { updatePasswordSchema } from '../../../schemas/updatePasswordSchema';
import { useTranslation } from 'react-i18next';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { toggleClick } from '../../SignUpPage/toggleClick';
import {
  ModalBtnContainer,
  ModalCloseBtn,
  ModalSvg,
} from '../../UserModal/UserModal.styled';
import icons from '../../../assets/images/sprite.svg';
import {
  ChangePasswordForm,
  EyeIcon,
  PasswordFormErrorText,
  PasswordFormInput,
  PasswordInputThumb,
  PasswordInputsWrap,
  PasswordText,
  PasswordTextThumb,
  PasswordTitle,
} from './PasswordForm.styled';
import { SettingsSubmitBtn } from '../../../pages/Settings/Settings.styled';

const PasswordForm: FC<IPasswordForm> = ({ user, show, close }) => {
  const { t } = useTranslation();
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

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
        <ModalBtnContainer>
          <ModalCloseBtn
            onClick={() => {
              close();
              resetPasswords();
            }}
          >
            <ModalSvg>
              <use href={`${icons}#icon-close-btn`}></use>
            </ModalSvg>
          </ModalCloseBtn>
        </ModalBtnContainer>
        <PasswordTextThumb>
          <PasswordTitle>Change Password</PasswordTitle>
          <PasswordText>{t('edit.if')}</PasswordText>
          <ChangePasswordForm onSubmit={handleSubmit(updateUserPassword)}>
            <PasswordInputsWrap>
              <label>
                <PasswordInputThumb>
                  <PasswordFormInput
                    className={`${
                      errors?.password?.message ? 'error' : ''
                    }  settings-input`}
                    type={toggleInput}
                    placeholder={t('edit.write')}
                    {...register('password', { required: true })}
                    onChange={e => {
                      if (e.target.value) {
                        setIsDisabled(false);
                        return;
                      }
                      setIsDisabled(true);
                    }}
                  />
                  <EyeIcon
                    onClick={() =>
                      toggleClick(toggleInput, setToggleInput, setToggleIcon)
                    }
                  >
                    {toggleIcon ? (
                      <RiEyeOffLine
                        style={{ fill: 'var(--dark-violet-clr)' }}
                      />
                    ) : (
                      <RiEyeLine style={{ fill: 'var(--dark-violet-clr)' }} />
                    )}
                  </EyeIcon>
                </PasswordInputThumb>
                {errors.password && (
                  <PasswordFormErrorText>
                    <span>{errors.password?.message}</span>
                  </PasswordFormErrorText>
                )}
              </label>

              <label>
                <PasswordInputThumb>
                  <PasswordFormInput
                    className={`${
                      errors?.newPassword?.message ? 'error' : ''
                    }  settings-input`}
                    type={toggleInput}
                    placeholder={t('edit.writenew')}
                    {...register('newPassword', { required: true })}
                    onChange={e => {
                      if (e.target.value) {
                        setIsDisabled(false);
                        return;
                      }
                      setIsDisabled(true);
                    }}
                  />
                  <EyeIcon
                    onClick={() =>
                      toggleClick(toggleInput, setToggleInput, setToggleIcon)
                    }
                  >
                    {toggleIcon ? (
                      <RiEyeOffLine
                        style={{ fill: 'var(--dark-violet-clr)' }}
                      />
                    ) : (
                      <RiEyeLine style={{ fill: 'var(--dark-violet-clr)' }} />
                    )}
                  </EyeIcon>
                </PasswordInputThumb>
                {errors.newPassword && (
                  <PasswordFormErrorText>
                    <span>{errors.newPassword?.message}</span>
                  </PasswordFormErrorText>
                )}
              </label>
            </PasswordInputsWrap>
            <SettingsSubmitBtn type="submit" disabled={isDisabled}>
              {t('edit.submit')}
            </SettingsSubmitBtn>
          </ChangePasswordForm>
        </PasswordTextThumb>
      </Modal.Body>
    </Modal>
  );
};

export default PasswordForm;
