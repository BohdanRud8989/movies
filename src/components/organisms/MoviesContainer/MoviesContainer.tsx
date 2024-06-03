import { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { ORIGIN } from '../../../utils';
import { Movie } from '../../../types';

import styles from './moviesContainer.module.css';

type MoviesContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
    title: string;
    movies: Movie[];
};

const MoviesContainer = ({ movies, title, ...props }: MoviesContainerProps) => {
    const navigate = useNavigate();

    const handleMovieClick = (id: string) => {
        navigate(`/${id}`);
    };

    return (
        <div className={styles.moviesContainer} {...props}>
            <h2 className={styles.moviesContainerTitle}>{title}</h2>
            <div className={styles.moviesContainerList}>
                {movies?.map(({ id, title, poster }) => (
                    <div
                        className={styles.moviesContainerListItem}
                        key={id}
                        onClick={() => handleMovieClick(id)}
                    >
                        <img
                            className={styles.moviesContainerListItemPoster}
                            src={`${ORIGIN}${poster}`}
                            alt={title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesContainer;
