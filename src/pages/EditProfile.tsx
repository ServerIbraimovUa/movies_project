import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

import PasswordForm from '../components/EditUser/PasswordForm';
import ImageUpload from '../components/EditUser/ImageUpload';
import { upload } from '../services/image';
import { writeUserData } from '../db/writeData';
import { readData } from '../db/readData';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [show, setShow] = useState(false);
  const [updatedAvatarFile, setUpdatedAvatarFile] = useState<File | null>(null);
  const [databaseUser, setDatabaseUser] = useState<any>({});

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
      <h1>Profile</h1>

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
          <button type="button" onClick={handleShow}>
            Change password
          </button>
        </li>
      </ul>
      <div>
        <h2>User</h2>
        <div>
          <ImageUpload
            currentAvatarURL={
              databaseUser?.imageUrl ? databaseUser?.imageUrl : ''
            }
            onAvatarChanged={file => setUpdatedAvatarFile(file)}
          />
          <button type="button" onClick={() => saveProfile()}>
            Save img
          </button>
        </div>
        <select
          name="Gender"
          value={databaseUser.sex}
          onChange={e => {
            setDatabaseUser({ ...databaseUser, sex: e.target.value });
          }}
        >
          <option value="none">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
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
