import { FC } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { Movies } from "../../../types/homeTypes";
import { useTranslation } from "react-i18next";
=======
import { IGenres, Movies } from "../../../types/homeTypes";
import { useTranslation } from "react-i18next";

>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface HomeListItemProps extends Movies {
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: boolean;
  genres: IGenres[];
}

const HomeListItem: FC<HomeListItemProps> = ({
  title,
  poster_path,
  id,
  vote_average,
  original_title,
  overview,
  genre_ids,
  release_date,
  name,
  first_air_date,
  addFavorite,
  removeFavorite,
  isFavorite,
  genres,
}) => {
  const { t } = useTranslation();
  const location = useLocation();
<<<<<<< HEAD
  const { t } = useTranslation();
  return (
    <li style={{ display: "flex" }}>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div>
=======
  const genresId = genre_ids.filter((g) => {
    return genres.find((genre) => genre.id === g);
  });
  const genresName = genresId.map((g) => {
    return genres.find((genre) => genre.id === g);
  });

  return (
    <li style={{ display: "flex" }}>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div className="image-wrapper">
>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          <span>{vote_average}</span>
        </div>
      </Link>
      <div>
<<<<<<< HEAD
        <p>
          {t("home.releasehome")} {release_date}
        </p>
        {title && original_title && title.substring(0, 20)}
        <h3>{t("home.overview")}</h3>
        <p>{overview}</p>
        <h4>{t("home.genres")}</h4>
=======
        <h2>{name || title}</h2>
        <p>
        {t("home.year")}{" "}
          {(release_date || first_air_date) &&
            (release_date?.substring(0, 4) || first_air_date?.substring(0, 4))}
        </p>
        <div>
          <p>{t("home.genre")}</p>
          {genresName && (
            <ul>
              {genresName.map((g) => (
                <li key={g?.id}>{g?.name}</li>
              ))}
            </ul>
          )}
        </div>
        <p>{t("home.description")} </p>
        <p>{overview}</p>
      </div>
      <div>
        <Link to={`/movie/${id}`} state={{ from: location }}>
        {t("home.watch")}
        </Link>
        {!isFavorite ? (
          <button type="button" onClick={() => addFavorite(id)}>
            <MdOutlineFavoriteBorder />
          </button>
        ) : (
          <button type="button" onClick={() => removeFavorite(id)}>
            <MdOutlineFavorite />
          </button>
        )}
>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
      </div>
    </li>
  );
};

export default HomeListItem;
