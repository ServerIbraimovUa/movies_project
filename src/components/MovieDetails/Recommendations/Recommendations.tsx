import { FC, useEffect, useState } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import Error from "../../Error/Error";
import { getMovieRecommendations } from "../../../services/api";
import { useTranslation } from "react-i18next";
import { RecommendationsStyled } from "./Recommendations.styled";
import RecommendationsList from "./RecommendationsList/RecommendationsList";

const Recommendations: FC = () => {
  const [recommendations, setRecommendations] = useState<
    IMovieRecommendations[]
  >([]);
  const [error, setError] = useState(false);

  const { t } = useTranslation();
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
    <RecommendationsStyled>
      {recommendations.length === 0 ? (
        <h3>{t("detalies.oops")}</h3>
      ) : (
        <>
          <h3 className="recommendations-title">Catalog</h3>
          <RecommendationsList recommendations={recommendations} />
        </>
      )}
      {error && <Error />}
    </RecommendationsStyled>
  );
};

export default Recommendations;
