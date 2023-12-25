import { useEffect, useState } from 'react';
import defaultImg from '../../images/defaultAvatar.jpg';

const ImageUpload = ({ currentAvatarURL, onAvatarChanged }) => {
  const [avatarURL, setAvatarURL] = useState<string | null>();

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
      <img src={avatarURL} alt="" width={'80px'} />
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={e => preview(e.target.files[0])}
      />
    </div>
  );
};

export default ImageUpload;
