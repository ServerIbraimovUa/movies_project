import { FC } from "react";

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
  return (
    <ReviewCardStyled>
      <img src={avatar_path} alt={author} />

      <div>
        <div className="review-created">
          <h3 className="review-name">{author}</h3>
          <p>
            {created_at
              .substring(0, 10)
              .replaceAll("-", ".")
              .split(".")
              .reverse()
              .join(".")}
          </p>
        </div>
        <p className="review-text">{content}</p>
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewsItem;
