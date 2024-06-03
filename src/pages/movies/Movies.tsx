import React, { HTMLAttributes, useCallback } from 'react';
import { useMovies, useDebounce } from '../../hooks';
import { Movie, MovieGenres } from '../../types';
import { CenteredLayout } from '../../layouts';
import { MoviesContainer } from '../../components';
import { useSearch } from '../../contexts';

import styles from './movies.module.css';

type MoviesProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const Movies = (props: MoviesProps) => {
    const { value: searchTerm } = useSearch();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const groupByGenre = useCallback((movies: Movie[]) => {
        const moviesByGenre = movies.reduce<Record<string, Movie[]>>(
            (groupsObj, movie) => {
                const groupsObjCopy = { ...groupsObj };
                movie.genres.forEach((genre) => {
                    groupsObjCopy[genre] =
                        groupsObjCopy[genre] !== undefined
                            ? [...groupsObjCopy[genre], movie]
                            : [movie];
                });
                return groupsObjCopy;
            },
            {}
        );
        return Object.entries(moviesByGenre);
    }, []);

    const {
        data: genres,
        isLoading,
        isError,
    } = useMovies<MovieGenres>(debouncedSearchTerm, groupByGenre);

    if (isLoading) {
        return (
            <CenteredLayout>
                <span className={styles.genresNotification}>Loading...</span>
            </CenteredLayout>
        );
    }
    if (isError) {
        return (
            <CenteredLayout>
        <span className={styles.genresNotification}>
          Error in getting movies.
        </span>
            </CenteredLayout>
        );
    }

    return (
        <div className={styles.genres} {...props}>
            {genres !== undefined &&
            genres.map(([genre, movies]) => (
                <MoviesContainer key={genre} title={genre} movies={movies} />
            ))}
        </div>
    );
};

export default Movies;
