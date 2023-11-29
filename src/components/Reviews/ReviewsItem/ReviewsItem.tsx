import React, { FC } from "react";
import { IMovieReview } from "../../../types/movieDetailsTypes";

const ReviewsItem: FC<IMovieReview> = ({ author, content, avatar_path }) => {
  return (
    <li>
      <img src={avatar_path} alt={author} />
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
