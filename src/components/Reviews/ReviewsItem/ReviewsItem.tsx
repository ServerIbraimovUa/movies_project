import React, { FC } from "react";

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
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;

// avatar_path
