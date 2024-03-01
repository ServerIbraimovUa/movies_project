import { FC, useEffect, useRef, useState } from 'react';
import defaultImg from '../../../images/defaultAvatar.jpg';
import { IImageUpload } from '../../../types/editProfileTypes';
import {
  EditAvatarIcon,
  EditAvatarInput,
  EditBtnWrap,
  FileBtn,
  UserAvatar,
} from './ImageUpload.styled';
import icons from '../../../assets/images/sprite.svg';

const ImageUpload: FC<IImageUpload> = ({
  currentAvatarURL,
  onAvatarChanged,
}) => {
  const [avatarURL, setAvatarURL] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAvatarURL(currentAvatarURL || defaultImg);
  }, [currentAvatarURL]);

  const preview = (file: File) => {
    if (!file) return;
    const previewURL = URL.createObjectURL(file);
    setAvatarURL(previewURL);
    onAvatarChanged(file);
  };

  const onChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
      return;
    }
  };

  return (
    <div>
      <UserAvatar src={avatarURL} alt="User avatar" />
      <EditAvatarInput
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={e => {
          if (!e.target.files) {
            return;
          }
          preview(e.target.files[0]);
        }}
        ref={inputRef}
      />
      <EditBtnWrap>
        <FileBtn onClick={onChooseFile}>
          <EditAvatarIcon>
            <use href={`${icons}#icon-edit`} className="modal-icon"></use>
          </EditAvatarIcon>
        </FileBtn>
      </EditBtnWrap>
    </div>
  );
};

export default ImageUpload;
