import { useMemo } from 'react';

import styles from './starRating.module.css';

type StarRatingProps = {
    rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
    const stars = useMemo(() => {
        const starsList: { className: string }[] = [];

        for (let i = 1; i <= 5; i++) {
            const isHalf = rating < i && Math.ceil(rating) >= i;
            const isFull = rating / i >= 1;
            const starClass = `${styles.starRatingItem} ${
                isHalf ? styles.starRatingItemHalf : ''
            }
                ${isFull ? styles.starRatingItemFilled : ''}`;
            starsList.push({ className: starClass });
        }
        return starsList;
    }, [rating]);

    return (
        <div className={styles.starRating}>
            {stars.map(({ className }, index) => (
                <span key={index} className={className}>
          ★
        </span>
            ))}
        </div>
    );
};

export default StarRating;
