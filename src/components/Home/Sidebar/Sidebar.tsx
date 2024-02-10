import React, { FC } from "react";
import Genres from "../Genres/Genres";
import Years from "../Years/Years";
import { IGenres, Movies } from "../../../types/homeTypes";
import { getAllTrending } from "../../../services/api";
import { useSearchParams } from "react-router-dom";
import { ButtonReset, GenresTilte, GenresWrapper, SidebarContainer, TitleWrapper, YearWrapper, YearsTitle } from "./Sidebar.styled";

interface ISidebarProps {
  genres: IGenres[];
  setGenreId: (id: number | null) => void;
  setYear: (id: number | null) => void;
  setMovies: (results: Movies[]) => void;
}

const Sidebar: FC<ISidebarProps> = ({
  genres,
  setGenreId,
  setYear,
  setMovies,
}) => {
  const [queryText, setQueryText]: any = useSearchParams();
  const reset = async () => {
    if (queryText.size) {
      const { results } = await getAllTrending();
      setMovies(results);
    }
    setGenreId(null);
    setYear(null);
    setQueryText("");
  };
  return (
   <SidebarContainer>
      <GenresWrapper>
        <TitleWrapper>
        <GenresTilte>Genres</GenresTilte>
        <ButtonReset type="button" onClick={reset}>
          Reset all
        </ButtonReset>
        </TitleWrapper>
        <Genres genres={genres} setGenreId={setGenreId} />
        </GenresWrapper>
        <YearWrapper>
        <YearsTitle>Year</YearsTitle>
        <Years setYear={setYear} />
      </YearWrapper>
      </SidebarContainer>
  );
};

export default Sidebar;
