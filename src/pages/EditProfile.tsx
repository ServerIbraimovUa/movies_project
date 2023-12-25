import { useEffect, useState } from 'react';
import {
  EmailAuthProvider,
  User,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase-config';

import NameForm from '../components/EditUser/NameForm';
import PasswordForm from '../components/EditUser/PasswordForm';
import ImageUpload from '../components/EditUser/ImageUpload';
import { upload } from '../services/image';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isUpdatePassword, setIsUpdatePassword] = useState<boolean>(false);
  const [isUpdateImg, setIsUpdateImg] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<null | string>(null);

  let updatedAvatarFile: File | null = null;

  console.log(user);

  useEffect(() => {
    if (!auth.currentUser) return;
    setUser(auth.currentUser);
    setUserEmail(auth.currentUser.email);
  }, [user, userEmail]);

  const saveProfile = async () => {
    if (updatedAvatarFile !== null) {
      const avatarPath = `users-images/${user?.uid}`;

      const updatedAvatarURL = await upload(avatarPath, updatedAvatarFile);

      await updateProfile(user, {
        photoURL: updatedAvatarURL,
      });

      //debugger;
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          {/* <input
            defaultValue={userEmail || ''}
            {...register('password', { required: true })}
          /> */}
          <button>Change email</button>
        </li>
        <li>
          {isUpdatePassword ? (
            <PasswordForm user={user} setIsUpdate={setIsUpdatePassword} />
          ) : (
            <button type="button" onClick={() => setIsUpdatePassword(true)}>
              Change password
            </button>
          )}
        </li>
      </ul>
      <div>
        <h2>User</h2>
        <div>
          <ImageUpload
            currentAvatarURL={user?.photoURL}
            onAvatarChanged={file => (updatedAvatarFile = file)}
          />
          {!isUpdateImg && (
            <button type="button" onClick={() => saveProfile()}>
              Save img
            </button>
          )}
        </div>
        <select name="Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {user && <NameForm user={user} />}
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
