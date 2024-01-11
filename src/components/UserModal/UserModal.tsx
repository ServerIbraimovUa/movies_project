import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

interface IModal {
  show: boolean;
  close(): void;
}

const UserModal: FC<IModal> = ({ show, close }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Modal show={show} onHide={close}>
        <Modal.Body>
          <div>
            <NavLink to="/settings/personal-info" onClick={close}>
            {t("usermodal.settings")}
            </NavLink>
            <button onClick={close}>{t("usermodal.close")}</button>
            <h1>{t("usermodal.profile")}</h1>
            <div>
              <img src="" alt="" width={'50px'} height={'50px'} />
              <p>{t("usermodal.email")}</p>
              <p>{t("usermodal.name")}</p>
              <p>{t("usermodal.gender")}</p>
            </div>
            <div>
              <h2>{t("usermodal.social")}</h2>
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
