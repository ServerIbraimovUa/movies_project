import { FC } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IGenres, Movies } from "../../../types/homeTypes";
import { useTranslation } from "react-i18next";
import { Button, ButtonWrapper, CardImg, Content, ContentWrapper, GenresList, GenresWrapper, Icon, IconBorder, Info, SubTitle, Title, WatchButton } from "./HomeListItem.styled";


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
  original_language

}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const genresId = genre_ids.filter((g) => {
    return genres.find((genre) => genre.id === g);
  });
  const genresName = genresId.map((g) => {
    return genres.find((genre) => genre.id === g);
  });

  return (
   
    <li>
       <Info>
        <ContentWrapper>
      <Link to={`/movie/${id}`} state={{ from: location }}>        
          <CardImg src={`${BASE_IMG}${poster_path}`} alt={title} />       
      </Link>
  
        <Title>{name || title}</Title>
        <SubTitle>
          {t("home.year")}{" "}
        <Content>
          {(release_date || first_air_date) &&
            (release_date?.substring(0, 4) || first_air_date?.substring(0, 4))}
        </Content>
        </SubTitle>
        <GenresWrapper>    
          <SubTitle>{t("home.genre")}{" "}</SubTitle>
          {genresName && (
            <GenresList>
              {genresName.map((g) => (
                <li key={g?.id}>{g?.name},</li>
              ))}
            </GenresList>
          )}
        </GenresWrapper>  
        <SubTitle>
          {t("home.language")}{" "}
        <Content>{ original_language}</Content>
        </SubTitle>
        <SubTitle>{t("home.description")}</SubTitle>
        <Content>{overview}</Content>
        </ContentWrapper>
        <ButtonWrapper>
        <WatchButton to={`/movie/${id}`} state={{ from: location }}>
        {t("home.watch")}
        </WatchButton>
        
        {!isFavorite ? (
          <Button type="button" onClick={() => addFavorite(id)}>
            <IconBorder/>
          </Button>
        ) : (
          <Button type="button" onClick={() => removeFavorite(id)}>
            <Icon />
          </Button>
        )}
      </ButtonWrapper>
    </Info>
    </li>
  );
};

export default HomeListItem;
