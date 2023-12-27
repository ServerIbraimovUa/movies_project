import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="personal-info">Edit Account</Link>
          </li>
          <li>
            <Link to="account">Account Settings</Link>
          </li>
          <li>
            <Link to="account-deletion">Delete Account</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
