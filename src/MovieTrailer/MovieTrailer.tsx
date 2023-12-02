import React, { FC, useEffect, useState } from "react";
import { IMovieTrailer } from "../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import { getMovieTrailer } from "../services/api";
// import TrailerItem from "./TrailerItem";
import Error from "../components/Error/Error";

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
    <div>
      {trailer && (
        <iframe
          src={`${srcTrailer}${trailer}`}
          title="YouTube video player"
        ></iframe>
      )}
      {error && <Error />}
    </div>
  );
};

export default MovieTrailer;
