import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieTrailer } from "../../../services/api";
import Error from "../../Error/Error";
import { TrailerStyled } from "./MovieTrailer.styled";

const srcTrailer = "https://www.youtube.com/embed/";
const MovieTrailer: FC = () => {
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getTrailer = async (id: number) => {
      try {
        const { results } = await getMovieTrailer(id);

        setTrailer(results[0].key);
      } catch (error) {
        setError(true);
      }
    };
    getTrailer(Number(movieId));
  }, [movieId]);

  return (
    <TrailerStyled>
      {trailer ? (
        <iframe
          className="trailer"
          src={`${srcTrailer}${trailer}`}
          title="YouTube video player"
        ></iframe>
      ) : (
        <p>Ops...there's no trailer here</p>
      )}

      {error && <Error />}
    </TrailerStyled>
  );
};

export default MovieTrailer;
