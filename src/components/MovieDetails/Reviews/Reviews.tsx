import React, { FC, useEffect, useState } from "react";
import { IMovieReview } from "../../../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../../services/api";
import ReviewsList from "./ReviewsList/ReviewsList";
import Error from "../../Error/Error";
import SeeMoreBtn from "./SeeMoreBtn/SeeMoreBtn";
import { useTranslation } from "react-i18next";

const Reviews: FC = () => {
  const [reviews, setReview] = useState<IMovieReview[]>([]);
  const [error, setError] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(2);

  const { movieId } = useParams();

  const { t } = useTranslation();
  useEffect(() => {
    const getReviews = async (id: number) => {
      try {
        const { results } = await getMovieReview(id);
        setReview(results);
      } catch (error) {
        setError(true);
      }
    };
    getReviews(Number(movieId));
  }, [movieId]);

  const handleSeeMore = () => {
    setVisibleReviews((prevCount) => prevCount + 2);
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <h3>{t("detalies.noreviews")}</h3>
      ) : (
        <>
          <ReviewsList reviews={reviews.slice(0, visibleReviews)} />
          <SeeMoreBtn
            onClick={handleSeeMore}
            hasMoreReviews={visibleReviews < reviews.length}
          />
        </>
      )}
      {error && <Error />}
    </div>
  );
};

export default Reviews;
