export type PageMeta = {
  title: string;
  description: string;
};

export interface Movie {
  id: string;
  title: string;
  released_on: string;
  cast: string[];
  backdrop: string;
  director: string[];
  overview: string;
  length: string;
  genres: string[];
  slug: string;
  classification: string;
  imdb_rating: number;
  poster:string;
}

export interface MoviesResponse {
  movies: Movie[];
}

export type MovieGenres =  [string, Movie[]][]
