import { useQuery } from 'react-query';
import { Movie, MoviesResponse, MovieGenres } from '../types';
import { API_URL, AUTHORIZATION_TOKEN } from '../utils';

const useMovies = <T extends MovieGenres | Movie | undefined>(
    search?: string,
    select?: (data: Movie[]) => T,
    enabled = true
) => {
    return useQuery(['get-movies', search, select], () => fetchMovies(search), {
        enabled,
        retry: false,
        refetchOnWindowFocus: false,
        select,
    });
};

async function fetchMovies(search?: string): Promise<Movie[]> {
    const fullUrl =
        search !== undefined
            ? `${API_URL}?q=${encodeURIComponent(search)}`
            : API_URL;

    const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION_TOKEN,
        },
    });
    const { movies }: MoviesResponse = await response.json();
    return movies;
}

export default useMovies;
