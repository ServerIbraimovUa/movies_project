import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase-config';

import PasswordForm from '../../../components/EditUser/PasswordForm/PasswordForm';
import ImageUpload from '../../../components/EditUser/ImageUpload/ImageUpload';
import { upload } from '../../../services/image';
import { writeUserData } from '../../../db/writeData';
import {
  failedNotification,
  successNotification,
} from '../../../services/notifications';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import {
  ArrowIcon,
  ChangePasswordBtn,
  EditProfileContainer,
  EditProfileTitle,
  ErrorInputText,
  NameInput,
  NameLabel,
  PasswordThumb,
  SelectorsWrap,
  SexThumb,
  SocialNetworksContainer,
  SocialNetworksInput,
  UserInfoWrapper,
} from './EditProfile.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import icons from '../../../assets/images/sprite.svg';
import { SettingsSelect, SettingsSubmitBtn } from '../Settings.styled';
import { useUser } from '../../../context/UserContext';
import { UserType } from '../../../types/user';

type Inputs = {
  name?: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(30)
    .matches(/^[aA-zZ\s]+$/),
});

const EditProfile = () => {
  const [show, setShow] = useState(false);
  const [updatedAvatarFile, setUpdatedAvatarFile] = useState<File | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, databaseUser, setDatabaseUser } = useUser()!;
  const [actualUser, setActualUser] = useState<User | null>(null);
  const [userToSave, setUserToSave] = useState({} as UserType);

  useEffect(() => {
    setUserToSave({ ...databaseUser });
  }, [databaseUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const socialMedia = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    youtube: 'Youtube',
  };

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setActualUser(currentUser);
    });
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const saveProfile = async () => {
    if (!user) return;
    if (updatedAvatarFile !== null) {
      const avatarPath = `users-images/${user?.uid}`;
      const updatedAvatarURL = await upload(avatarPath, updatedAvatarFile);

      userToSave.imageUrl = updatedAvatarURL;
    }
    try {
      await writeUserData({ ...userToSave, uid: user.uid });
      setDatabaseUser({ ...userToSave });
      navigate('/');
      successNotification('You have updated your profile!');
    } catch {
      failedNotification('You have not updated your your profile');
    }
  };

  return (
    <>
      {Object.keys(userToSave).length > 0 && (
        <EditProfileContainer>
          <PasswordThumb>
            <PasswordForm user={actualUser} close={handleClose} show={show} />
            <ChangePasswordBtn type="button" onClick={handleShow}>
              {t('edit.change')}
            </ChangePasswordBtn>
          </PasswordThumb>
          <div>
            <EditProfileTitle>{t('edit.current')}</EditProfileTitle>
            <form onSubmit={handleSubmit(data => console.log(data))}>
              <UserInfoWrapper>
                <ImageUpload
                  currentAvatarURL={
                    userToSave?.imageUrl ? userToSave?.imageUrl : ''
                  }
                  onAvatarChanged={file => setUpdatedAvatarFile(file)}
                />
                <SelectorsWrap>
                  <SexThumb>
                    <SettingsSelect
                      value={userToSave.sex}
                      onChange={e => {
                        setUserToSave({
                          ...userToSave,
                          sex: e.target.value,
                        });
                      }}
                    >
                      <option value="none">{t('edit.none')}</option>
                      <option value="Male">{t('edit.male')}</option>
                      <option value="Female">{t('edit.female')}</option>
                    </SettingsSelect>
                    <ArrowIcon>
                      <use href={`${icons}#icon-down-arrow`}></use>
                    </ArrowIcon>
                  </SexThumb>
                  <NameLabel>
                    {errors.name && (
                      <>
                        <ErrorInputText>
                          Only alphabets are allowed for this field. <br />
                          Use at least 3 letters, but less than 30.
                        </ErrorInputText>
                      </>
                    )}
                    <NameInput
                      {...register('name')}
                      className={`${
                        errors?.name?.message ? 'error' : ''
                      }  settings-input`}
                      value={userToSave.username}
                      onChange={e => {
                        setUserToSave({
                          ...userToSave,
                          username: e.target.value,
                        });
                      }}
                    />
                  </NameLabel>
                </SelectorsWrap>
              </UserInfoWrapper>
            </form>
            <EditProfileTitle>Social Networks</EditProfileTitle>
            <SocialNetworksContainer>
              {Object.keys(socialMedia).map(el => {
                return (
                  <label key={el}>
                    <SocialNetworksInput
                      className="settings-input"
                      name={el}
                      type="url"
                      value={userToSave.socials?.[el] || ''}
                      placeholder={el}
                      onChange={e => {
                        setUserToSave({
                          ...userToSave,
                          socials: userToSave.socials
                            ? { ...userToSave.socials, [el]: e.target.value }
                            : { [el]: e.target.value },
                        });
                      }}
                    />
                  </label>
                );
              })}
            </SocialNetworksContainer>
          </div>
          <SettingsSubmitBtn
            type="button"
            onClick={handleSubmit(() => saveProfile())}
          >
            {t('edit.save')}
          </SettingsSubmitBtn>
        </EditProfileContainer>
      )}
    </>
  );
};

export default EditProfile;
