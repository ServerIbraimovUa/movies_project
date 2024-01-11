import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface ReviewsItemProps {
  author: string;
  content: string;
  avatar_path: string;
  created_at: string;
}

const ReviewsItem: FC<ReviewsItemProps> = ({

  author,
  content,
  avatar_path,
  created_at,
}) => {
const { t } = useTranslation();
  return (
    <li>
      {avatar_path ? (
        <img src="заглушка" alt={author} />
      ) : (
        <img src={avatar_path} alt={author} />
      )}
      <p>
        {created_at
          .substring(0, 10)
          .replaceAll("-", ".")
          .split(".")
          .reverse()
          .join(".")}
      </p>
      <h3>{t("detalies.author")} {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
