import { HTMLAttributes, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks';
import { CenteredLayout } from '../../layouts';
import { convertToDateAndFormat, ORIGIN } from '../../utils';
import { StarRating } from '../../components';

import styles from './movie.module.css';

type MovieProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
type PagePathProps = { slug: string };

const Movie = memo((props: MovieProps) => {
    const { slug } = useParams<PagePathProps>();
    const { data: movie, isLoading, isError } = useMovie(slug);

    if (isLoading) {
        return (
            <CenteredLayout>
                <span className={styles.movieNotification}>Loading...</span>
            </CenteredLayout>
        );
    }
    if (isError || movie === undefined) {
        return (
            <CenteredLayout>
        <span className={styles.movieNotification}>
          Error in getting movie details.
        </span>
            </CenteredLayout>
        );
    }

    return (
        <div className={styles.movie} {...props}>
            <img
                className={styles.moviePoster}
                src={`${ORIGIN}${movie.poster}`}
                alt={movie.title}
            />
            <div className={styles.movieInfo}>
                <div
                    className={`${styles.movieInfoRow} ${styles.movieInfoRowAdjusted}`}
                >
                    <h2 className={styles.movieInfoRowTitle}>
                        {movie.title}({movie.imdb_rating})
                    </h2>
                    <StarRating rating={movie.imdb_rating / 2} />
                </div>

                <div className={styles.movieInfoRow}>
                    <span>{convertToDateAndFormat(movie.released_on)}</span> |
                    <span>{movie.length}</span> |<span>{movie.director}</span>
                </div>
                <div className={styles.movieInfoRow}>
                    <span>cast: {movie.cast.join(', ')}</span>
                </div>
                <span>{movie.overview}</span>
            </div>
        </div>
    );
});

export default Movie;
