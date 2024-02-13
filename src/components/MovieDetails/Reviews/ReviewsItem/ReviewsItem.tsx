import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ReviewCardStyled } from "./ReviewsItem.styled";

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
    <ReviewCardStyled>
      {avatar_path ? (
        <img src="заглушка" alt={author} />
      ) : (
        <img src={avatar_path} alt={author} />
      )}
      <div>
        <p>
          {created_at
            .substring(0, 10)
            .replaceAll("-", ".")
            .split(".")
            .reverse()
            .join(".")}
        </p>
        <h3>
          {t("detalies.author")} {author}
        </h3>
        <p>{content}</p>
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewsItem;
