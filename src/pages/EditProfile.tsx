import { useEffect, useState } from 'react';
import defaultImg from '../images/defaultAvatar.jpg';
import {
  EmailAuthProvider,
  User,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { updateProfile } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  failedNotification,
  successNotification,
} from '../services/notifications';
import NameForm from '../components/EditUser/NameForm';

type FormValues = {
  name?: string;
  photoURL?: string;
  email?: string;
  password?: string;
  newPassword?: string;
};

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [userEmail, setUserEmail] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    if (!auth.currentUser) return;
    setUser(auth.currentUser);
    setUserEmail(auth.currentUser.email);
  }, [user, userEmail]);

  const updateUserPassword: SubmitHandler<FormValues> = async ({
    password,
    newPassword,
  }) => {
    if (!user || !password || !newPassword) return;
    const credential = EmailAuthProvider.credential(user.email || '', password);
    await reauthenticateWithCredential(user, credential).then(() => {
      updatePassword(user, newPassword)
        .then(() => {
          alert('You have changed your password');
          // ...
          return;
        })
        .catch(error => {
          // An error occurred
          // ...
        })
        .finally(() => setIsUpdate(false));
    });

    console.log(credential);
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
          {isUpdate ? (
            <form onSubmit={handleSubmit(updateUserPassword)}>
              <input
                type="password"
                {...register('password', { required: true })}
              />
              <div>
                <input
                  type="password"
                  {...register('newPassword', { required: true })}
                />
              </div>

              <button type="submit">sub</button>
            </form>
          ) : (
            <button type="button" onClick={() => setIsUpdate(true)}>
              Change password
            </button>
          )}
        </li>
      </ul>
      <div>
        <h2>User</h2>
        <div>
          <img src={defaultImg} alt="" width={'80px'} height={'80px'} />
          <button type="button">Edit</button>
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
