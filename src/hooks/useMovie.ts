import { useCallback } from 'react';
import { Movie } from '../types';
import useMovies from './useMovies';

const useMovie = (id?: string) => {
    const fetchMovie = useCallback(
        (movies: Movie[]) => movies.find(({ id: movieId }) => movieId === id),
        [id]
    );

    return useMovies<Movie | undefined>(undefined, fetchMovie, id !== undefined);
};

export default useMovie;
