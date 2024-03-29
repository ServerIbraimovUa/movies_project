import { useState, useEffect } from 'react';
import UserModal from '../UserModal/UserModal';
import defaultImg from '../../images/defaultAvatar.jpg';

import { useUser } from '../../context/UserContext';
import { readData } from '../../db/readData';
import { ButtonAvatar, ModalImg, UserContainer } from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';

//  Коли користувач успішно пройшов реестрацію або логін
const UserMenu = () => {
  const { user, databaseUser, setDatabaseUser } = useUser()!;
  const [show, setShow] = useState(false);
  const isTablet = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    const fetchUserFromDatabase = async () => {
      if (!user) return;
      setDatabaseUser(await readData(user.uid));
    };
    fetchUserFromDatabase();
  }, [user, setDatabaseUser]);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const { imageUrl, username } = databaseUser;
  const isTabletOrDesk = useMediaQuery({ query: '(min-width:1024px)' });

  return (
    <>
      <UserContainer>
        {/* дінамічне ім'я користувача */}
        <ButtonAvatar type="button" onClick={handleShow}>
          {isTabletOrDesk && username}
          <ModalImg src={imageUrl ? imageUrl : defaultImg} alt="Avatar" />
        </ButtonAvatar>

        {isTablet && <UserModal close={handleClose} show={show} />}
      </UserContainer>
    </>
  );
};

export default UserMenu;
