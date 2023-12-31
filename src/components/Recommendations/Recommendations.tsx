import React, { FC, useEffect, useState } from "react";
import { IMovieRecommendations } from "../../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import { getMovieRecommendations } from "../../services/api";
import RecommendationsList from "./RecommendationsList/RecommendationsList";

const Recommendations: FC = () => {
  const [recommendations, setRecommendations] = useState<
    IMovieRecommendations[]
  >([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getRecommendations = async (id: number) => {
      try {
        const { results } = await getMovieRecommendations(id);
        setRecommendations(results);
      } catch (error) {
        setError(true);
      }
    };
    getRecommendations(Number(movieId));
  }, [movieId]);

  return (
    <div>
      {recommendations.length === 0 ? (
        <h3>Oops... we don't have any recommendations</h3>
      ) : (
        <RecommendationsList recommendations={recommendations} />
      )}
      {error && <Error />}
    </div>
  );
};

export default Recommendations;
