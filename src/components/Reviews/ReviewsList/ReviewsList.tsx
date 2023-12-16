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
        reviews.map(({ id, author, content, author_details, created_at }) => {
          console.log(author_details);
          const avatar_path = author_details?.avatar_path || "";
          return (
            <ReviewsItem
              key={id}
              author={author}
              content={content}
              avatar_path={avatar_path}
              created_at={created_at}
            />
          );
        })}
    </StyledReviewsList>
  );
};

export default ReviewsList;
