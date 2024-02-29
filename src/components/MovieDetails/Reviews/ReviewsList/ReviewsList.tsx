import { FC } from "react";
import { IMovieReview } from "../../../../types/movieDetailsTypes";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import { StyledReviewsList } from "./ReviewsList.styled";

interface ReviewsProps {
  reviews: IMovieReview[];
}
const BASE_IMG = "https://image.tmdb.org/t/p/w300";

const ReviewsList: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews &&
        reviews.map(({ id, author, content, author_details, created_at }) => {
          const avatar_path = author_details?.avatar_path
            ? `${BASE_IMG}${author_details.avatar_path}`
            : "../../../../../public/userAvatar.png";
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
