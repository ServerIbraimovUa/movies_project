import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

import PasswordForm from '../components/EditUser/PasswordForm';
import ImageUpload from '../components/EditUser/ImageUpload';
import { upload } from '../services/image';
import { writeUserData } from '../db/writeData';
import { readData } from '../db/readData';

import { useTranslation } from "react-i18next";

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [show, setShow] = useState(false);
  const [updatedAvatarFile, setUpdatedAvatarFile] = useState<File | null>(null);
  const [databaseUser, setDatabaseUser] = useState<any>({});
  const { t } = useTranslation();

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
    debugger;

    if (!user) return;

    if (updatedAvatarFile !== null) {
      const avatarPath = `users-images/${user?.uid}`;
      const updatedAvatarURL = await upload(avatarPath, updatedAvatarFile);

      databaseUser.imageUrl = updatedAvatarURL;
    }

    await writeUserData({ ...databaseUser, uid: user.uid });
  };

  return (
    <div>
      <h1>{t("edit.profile")}</h1>

      <ul>
        {/* <li>
          <input
            defaultValue={userEmail || ''}
            type="email"
            {...register('email', { required: true })}
          />
          <button>Change email</button>
        </li> */}
        <li>
          <PasswordForm user={user} close={handleClose} show={show} />
          <button type="button" onClick={handleShow}>{t("edit.change")}</button>
        </li>
      </ul>
      <div>
      <h2>{t("edit.user")}</h2>
        <div>
          <ImageUpload
            currentAvatarURL={
              databaseUser?.imageUrl ? databaseUser?.imageUrl : ''
            }
            onAvatarChanged={file => setUpdatedAvatarFile(file)}
          />
          <button type="button" onClick={() => saveProfile()}>
          {t("edit.save")}
          </button>
        </div>
        <select
          name="Gender"
          value={databaseUser.sex}
          onChange={e => {
            setDatabaseUser({ ...databaseUser, sex: e.target.value });
          }}
        >
          <option value="none">{t("edit.none")}</option>
          <option value="Male">{t("edit.male")}</option>
          <option value="Female">{t("edit.female")}</option>
        </select>

        <input
          value={databaseUser?.username || ''}
          onChange={e =>
            setDatabaseUser({ ...databaseUser, username: e.target.value })
          }
        />
        {/* <input type="text" name="phone" placeholder="225-44-65" /> */}
        {/* <div>
            <h2>Social Networks</h2>
            <label>
              <input
                type="url"
                name="facebook"
                placeholder="https://example.com"
                pattern="https://.*"
                required
              />
            </label>
            <label>
              <input
                type="url"
                name="instagram"
                placeholder="https://example.com"
                pattern="https://.*"
                required
              />
            </label>
            <label>
              <input
                type="url"
                name="twitter"
                placeholder="https://example.com"
                pattern="https://.*"
                required
              />
            </label>

            <label>
              <input
                type="url"
                name="youtube"
                placeholder="https://example.com"
                pattern="https://.*"
                required
              />
            </label>
          </div> */}
      </div>
    </div>
  );
};

export default EditProfile;
