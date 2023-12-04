import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="editProfile">Edit Account</Link>
          </li>
          <li>
            <Link to="accountSettings">Account Settings</Link>
          </li>
          <li>
            <Link to="deleteAccount">Delete Account</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
