import React, { FC, useEffect, useState } from "react";
import { ICast } from "../../../types/movieDetailsTypes";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../services/api";
import CastList from "./CastList/CastList";
import Error from "../../Error/Error";
import { useTranslation } from "react-i18next";
import { MovieCastStyled } from "./Cast.styled";

const Cast: FC = () => {
  const { t } = useTranslation();
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
    <MovieCastStyled>
      {cast.length === 0 ? (
        <h3>{t("detalies.thecast")}</h3>
      ) : (
        <>
          <h3 className="cast-title">Actors</h3>
          <CastList cast={cast} />
        </>
      )}
      {error && <Error />}
    </MovieCastStyled>
  );
};

export default Cast;
