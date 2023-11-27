import { NavLink } from "react-router-dom";

//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  return (
    <>
      <NavLink to="/favorites">Favorite</NavLink>
      <div>
        {/* дінамічне ім'я користувача */}
        <p>User name</p>
        <button>Log out</button>
      </div>
    </>
  );
};

export default UserMenu;
