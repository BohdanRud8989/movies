import { ChangeEvent, HTMLAttributes } from 'react';
import { useSearch } from "../../../contexts";

import styles from './searchContainer.module.css';

type SearchContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const SearchContainer = (props: SearchContainerProps) => {
    const { value, updateValue } = useSearch();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateValue(event.target.value);
    };
    return (
        <div className={styles.searchContainer} {...props}>
            <h2 className={styles.searchContainerTitle}>WOOKIE MOVIES</h2>
            <input
                className={styles.searchContainerInput}
                type="text"
                placeholder="Search..."
                value={value}
                onChange={handleSearchChange}
            />
        </div>
    );
};
export default SearchContainer;
