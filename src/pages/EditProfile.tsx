import { useEffect, useState } from 'react';
import { User, updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config';

import NameForm from '../components/EditUser/NameForm';
import PasswordForm from '../components/EditUser/PasswordForm';
import ImageUpload from '../components/EditUser/ImageUpload';
import { upload } from '../services/image';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userEmail, setUserEmail] = useState<null | string>(null);
  const [show, setShow] = useState(false);

  let updatedAvatarFile: File | null = null;
  console.log(user);

  useEffect(() => {
    if (!auth.currentUser) return;
    setUser(auth.currentUser);
    setUserEmail(auth.currentUser.email);
  }, [user, userEmail]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const saveProfile = async () => {
    if (updatedAvatarFile !== null && user) {
      const avatarPath = `users-images/${user?.uid}`;
      const updatedAvatarURL = await upload(avatarPath, updatedAvatarFile);
      await updateProfile(user, {
        photoURL: updatedAvatarURL,
      });
    }
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
            currentAvatarURL={user?.photoURL ? user?.photoURL : ''}
            onAvatarChanged={file => (updatedAvatarFile = file)}
          />
          <button type="button" onClick={() => saveProfile()}>
            Save img
          </button>
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
