import { MdReplay } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchIdentifier } from '../SearchBar/search-slice';
import styles from './styles.module.css';

const SearchHistory = () => {
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  if (search?.history.length === 0) {
    return null;
  }

  return (
    <div className={styles.searchHistory}>
      <h2 className={styles.title}>
        Search History
      </h2>
      {search.history.map(({ identifier }, i) => (
        <div
          key={`searchHistory-${i}`}
          className={styles.row}
        >
          <div>
            {identifier}
          </div>
          <button
            className={styles.btnSm}
            type='button'
            onClick={() => {
              dispatch(setSearchIdentifier(identifier));
            }}
          >
            <MdReplay size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
