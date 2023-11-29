import React, { FC } from "react";
import { IMovieReview } from "../../../types/movieDetailsTypes";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import { StyledReviewsList } from "./ReviewsList.styled";

interface ReviewsProps {
  reviews: IMovieReview[];
}

const ReviewsList: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews &&
        reviews.map(({ id, author, content, avatar_path }) => {
          return (
            <ReviewsItem
              key={id}
              id={id}
              author={author}
              content={content}
              avatar_path={avatar_path}
            />
          );
        })}
    </StyledReviewsList>
  );
};

export default ReviewsList;
