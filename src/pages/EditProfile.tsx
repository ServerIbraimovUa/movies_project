import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

import PasswordForm from '../components/EditUser/PasswordForm';
import ImageUpload from '../components/EditUser/ImageUpload';
import { upload } from '../services/image';
import { writeUserData } from '../db/writeData';
import { readData } from '../db/readData';
import {
  failedNotification,
  successNotification,
} from '../services/notifications';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [show, setShow] = useState(false);
  const [updatedAvatarFile, setUpdatedAvatarFile] = useState<File | null>(null);
  const [databaseUser, setDatabaseUser] = useState<any>({});
  const { t } = useTranslation();

  const navigate = useNavigate();

  const socialMedia = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    youtube: 'Youtube',
  };

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
  });

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
      writeUserData({ ...databaseUser, uid: user.uid });
      navigate('/');
      successNotification('You have updated your profile!');
    } catch {
      failedNotification("You couldn't update your profile");
    }
  };

  return (
    <div>
      <div>
        <PasswordForm user={user} close={handleClose} show={show} />
        <button type="button" onClick={handleShow}>
          {t('edit.change')}
        </button>
      </div>
      <div>
        <h2>Current user</h2>
        <div>
          <ImageUpload
            currentAvatarURL={
              databaseUser?.imageUrl ? databaseUser?.imageUrl : ''
            }
            onAvatarChanged={file => setUpdatedAvatarFile(file)}
          />
        </div>
        <select
          name="Gender"
          value={databaseUser.sex}
          onChange={e => {
            setDatabaseUser({ ...databaseUser, sex: e.target.value });
          }}
        >
          <option value="none">{t('edit.none')}</option>
          <option value="Male">{t('edit.male')}</option>
          <option value="Female">{t('edit.female')}</option>
        </select>
        <input
          value={databaseUser?.username || ''}
          onChange={e =>
            setDatabaseUser({ ...databaseUser, username: e.target.value })
          }
        />
        {Object.keys(socialMedia).map(el => {
          return (
            <label key={el}>
              <input
                type="url"
                name={el}
                value={databaseUser.socials?.[el] || ''}
                placeholder={el}
                pattern="https://.*"
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
      </div>
      <button type="button" onClick={() => saveProfile()}>
        Save
      </button>
    </div>
  );
};

export default EditProfile;
