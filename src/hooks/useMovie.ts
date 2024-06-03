import { useCallback } from 'react';
import { Movie } from '../types';
import useMovies from './useMovies';

const useMovie = (slug: string | undefined) => {
    const fetchMovie = useCallback(
        (movies: Movie[]) => movies.find(({ slug: movieSlug }) => movieSlug === slug),
        [slug]
    );

    return useMovies<Movie | undefined>(undefined, fetchMovie, slug !== undefined);
};

export default useMovie;
