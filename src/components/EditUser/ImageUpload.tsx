import { FC, useEffect, useState } from 'react';
import defaultImg from '../../images/defaultAvatar.jpg';
import { IImageUpload } from '../../types/editProfileTypes';

const ImageUpload: FC<IImageUpload> = ({
  currentAvatarURL,
  onAvatarChanged,
}) => {
  const [avatarURL, setAvatarURL] = useState<string>('');

  useEffect(() => {
    setAvatarURL(currentAvatarURL || defaultImg);
  }, [currentAvatarURL]);

  const preview = (file: File) => {
    const previewURL = URL.createObjectURL(file);
    setAvatarURL(previewURL);
    onAvatarChanged(file);
  };

  return (
    <div>
      <img src={avatarURL} alt="User avatar" width={'100px'} height={'100px'} />
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={e => {
          if (!e.target.files) {
            return;
          }
          preview(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImageUpload;
