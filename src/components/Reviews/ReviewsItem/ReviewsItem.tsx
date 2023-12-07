import React, { FC } from "react";
// import { IMovieReview } from "../../../types/movieDetailsTypes";

interface ReviewsItemProps {
  author: string;
  content: string;
  avatar_path: string;
}

const ReviewsItem: FC<ReviewsItemProps> = ({
  author,
  content,
  avatar_path,
}) => {
  return (
    <li>
      <img src={avatar_path} alt={author} />
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
