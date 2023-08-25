import { SyntheticEvent } from 'react';
import { useFetchPokemonQuery } from '../../services/pokeApi';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchIdentifier } from './search-slice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);
  // const [pokemonIdentifier, setPokemonIdentifier] = useState('');
  const { isFetching } = useFetchPokemonQuery(search?.identifier);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      identifier: { value: string };
    };

    dispatch(setSearchIdentifier(target.identifier.value))
  }

  return (
    <div className={styles.searchBar}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <input
          autoFocus
          className={styles.input}
          type="text"
          name='identifier'
          placeholder='Search by Pokemon name or id'
        />
        <button
          className={styles.btnLg}
          type='submit'
          disabled={isFetching}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar;