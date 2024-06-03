import { useMemo } from 'react';

import styles from './starRating.module.css';

type StarRatingProps = {
    rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
    const stars = useMemo(() => {
        const starsList: { className: string }[] = [];

        for (let i = 1; i <= 5; i++) {
            const isHalf = i > rating && i <= Math.ceil(rating);
            // TODO display half star if rating is 2.5, 3.5, 4.5
            const starClass = `${styles.starRatingItem} ${isHalf
                ? styles.starRatingItemHalf: ''}
                ${Math.floor(rating) === rating ? styles.starRatingItemFilled: ''}`;
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
