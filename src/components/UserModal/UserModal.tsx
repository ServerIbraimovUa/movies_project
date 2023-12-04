import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface IModal {
  show: boolean;
  close(): void;
}

const UserModal: FC<IModal> = ({ show, close }) => {
  return (
    <div>
      <Modal show={show} onHide={close}>
        <Modal.Body>
          <div>
            <NavLink to="/settings" onClick={close}>
              settings
            </NavLink>
            <button onClick={close}>close</button>
            <h1>User Profile</h1>
            <div>
              <img src="" alt="" width={'50px'} height={'50px'} />
              <p>Email</p>
              <p>Name</p>
              <p>Gender</p>
            </div>
            <div>
              <h2>Social media</h2>
              {/* {socialLinks &&  <ul>
                 socialLinks.map(socialLink => {
                    <SocialLink link={socialLink} />
                  })
                </ul>} */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserModal;
