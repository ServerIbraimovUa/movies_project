import defaultImg from '../images/defaultAvatar.jpg';

const EditProfile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <button>Change password</button>
        </li>
        <li>
          <button>Change email</button>
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

        <input type="text" name="name" placeholder="Name" />
        <div>
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
        </div>
        <button type="button">Save</button>
      </div>
    </div>
  );
};

export default EditProfile;
