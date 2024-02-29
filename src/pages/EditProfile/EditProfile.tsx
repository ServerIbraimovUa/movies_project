import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

import PasswordForm from '../../components/EditUser/PasswordForm/PasswordForm';
import ImageUpload from '../../components/EditUser/ImageUpload/ImageUpload';
import { upload } from '../../services/image';
import { writeUserData } from '../../db/writeData';
import { readData } from '../../db/readData';
import {
  failedNotification,
  successNotification,
} from '../../services/notifications';
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
  SaveProfileInfoBtn,
  SelectorsWrap,
  SexSelect,
  SexThumb,
  SocialNetworksContainer,
  SocialNetworksInput,
  UserInfoWrapper,
} from './EditProfile.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import icons from '../../assets/images/sprite.svg';

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
  const [user, setUser] = useState<User | null>(null);
  const [show, setShow] = useState(false);
  const [updatedAvatarFile, setUpdatedAvatarFile] = useState<File | null>(null);
  const [databaseUser, setDatabaseUser] = useState<any>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const fetchUserFromDatabase = async () => {
      if (!auth.currentUser) return;
      setDatabaseUser(await readData(auth.currentUser.uid));
    };
    fetchUserFromDatabase();
  }, [user]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const saveProfile = async () => {
    if (!user) return;
    if (updatedAvatarFile !== null) {
      const avatarPath = `users-images/${user?.uid}`;
      const updatedAvatarURL = await upload(avatarPath, updatedAvatarFile);

      databaseUser.imageUrl = updatedAvatarURL;
    }
    try {
      await writeUserData({ ...databaseUser, uid: user.uid });
      navigate('/');
      successNotification('You have updated your profile!');
    } catch {
      failedNotification('You have not updated your your profile');
    }
  };

  return (
    <>
      {databaseUser && (
        <EditProfileContainer>
          <PasswordThumb>
            <PasswordForm user={user} close={handleClose} show={show} />
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
                    databaseUser?.imageUrl ? databaseUser?.imageUrl : ''
                  }
                  onAvatarChanged={file => setUpdatedAvatarFile(file)}
                />
                <SelectorsWrap>
                  <SexThumb>
                    <SexSelect
                      value={databaseUser.sex}
                      onChange={e => {
                        setDatabaseUser({
                          ...databaseUser,
                          sex: e.target.value,
                        });
                      }}
                    >
                      <option value="none">{t('edit.none')}</option>
                      <option value="Male">{t('edit.male')}</option>
                      <option value="Female">{t('edit.female')}</option>
                    </SexSelect>
                    <ArrowIcon>
                      <use href={`${icons}#icon-down-arrow`}></use>
                    </ArrowIcon>
                  </SexThumb>
                  <NameLabel>
                    <NameInput
                      {...register('name')}
                      className={errors?.name?.message ? 'error' : ''}
                      value={databaseUser.username}
                      onChange={e => {
                        setDatabaseUser({
                          ...databaseUser,
                          username: e.target.value,
                        });
                      }}
                    />
                    {errors.name && (
                      <>
                        <ErrorInputText>
                          Only alphabets are allowed for this field.
                        </ErrorInputText>
                        <ErrorInputText>
                          Use at least 3 letters, but less than 30.
                        </ErrorInputText>
                      </>
                    )}
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
                      name={el}
                      type="url"
                      value={databaseUser.socials?.[el] || ''}
                      placeholder={el}
                      onChange={e => {
                        setDatabaseUser({
                          ...databaseUser,
                          socials: databaseUser.socials
                            ? { ...databaseUser.socials, [el]: e.target.value }
                            : { [el]: e.target.value },
                        });
                      }}
                    />
                  </label>
                );
              })}
            </SocialNetworksContainer>
          </div>
          <SaveProfileInfoBtn
            type="button"
            onClick={handleSubmit(() => saveProfile())}
          >
            {t('edit.save')}
          </SaveProfileInfoBtn>
        </EditProfileContainer>
      )}
    </>
  );
};

export default EditProfile;
