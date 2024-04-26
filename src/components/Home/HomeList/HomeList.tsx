import React, { FC, useEffect, useState } from "react";

import HomeListItem from "../HomeListItem/HomeListItem";
import { IGenres, Movies } from "../../../types/homeTypes";
import { List } from "./HomeList.styled";

interface HomeListProps {
    movies: Movies[];
    genres: IGenres[];
}

const HomeList: FC<HomeListProps> = ({ movies, genres }) => {
    const storedFavorite = localStorage.getItem("favorite");
    const initialFavorite: Movies[] = storedFavorite
        ? JSON.parse(storedFavorite)
        : [];

    const [favorite, setFavorite] = useState<Movies[]>(initialFavorite);

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    const isFavorite = (id: number) => favorite.some((item) => item.id === id);

    const addFavorite = (id: number) => {
        const isAlreadyFavorite = favorite.some((item) => item.id === id);

        if (!isAlreadyFavorite) {
            const movieToAdd = movies.find((movie) => movie.id === id);
            if (movieToAdd) {
                setFavorite((prevFavorite) => [...prevFavorite, movieToAdd]);
            }
        }
    };

    const removeFavorite = (id: number) => {
        setFavorite((prevFavorite) =>
            prevFavorite.filter((item) => item.id !== id)
        );
    };

    return (
        <List>
            {movies ? (
                movies.map((movie) => {
                    const {
                        title,
                        name,
                        id,
                        vote_average,
                        poster_path,
                        overview,
                        original_title,
                        genre_ids,
                        release_date,
                        first_air_date,
                        original_language,
                    } = movie;
                    return (
                        <li key={id}>
                            <HomeListItem
                                title={title}
                                name={name}
                                vote_average={vote_average}
                                poster_path={poster_path}
                                id={id}
                                original_title={original_title}
                                overview={overview}
                                genre_ids={genre_ids}
                                release_date={release_date}
                                first_air_date={first_air_date}
                                addFavorite={addFavorite}
                                removeFavorite={removeFavorite}
                                isFavorite={isFavorite(movie.id)}
                                genres={genres}
                                original_language={original_language}
                            />
                        </li>
                    );
                })
            ) : (
                <h2>Somsing went wrong...</h2>
            )}
        </List>
    );
};

export default HomeList;
