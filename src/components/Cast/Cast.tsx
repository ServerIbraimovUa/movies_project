import React, { FC, useEffect, useState } from "react";
import { ICast } from "../../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";
import CastList from "./CastList/CastList";
import Error from "../Error/Error";

const Cast: FC = () => {
  const [cast, setCast] = useState<ICast[]>([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async (id: number) => {
      try {
        const { cast } = await getMovieCast(id);
        setCast(cast);
      } catch (error) {
        setError(true);
      }
    };
    getCast(Number(movieId));
  }, [movieId]);

  return (
    <div>
      {cast.length === 0 ? (
        <h3>The cast is unavailable...</h3>
      ) : (
        <CastList cast={cast} />
      )}
      {error && <Error />}
    </div>
  );
};

export default Cast;
