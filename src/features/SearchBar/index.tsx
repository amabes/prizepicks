'use client'
import { SyntheticEvent, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useFetchPokemonQuery } from '../../services/pokeApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addSearchHistory, setSearchIdentifier } from './search-slice';
import styles from './styles.module.css';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);
  const [identifier, setIdentifier] = useState(search?.identifier);
  const { isFetching } = useFetchPokemonQuery(search?.identifier);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const sanitizedIdentifier = identifier.toLowerCase();

    setIdentifier(sanitizedIdentifier);
    dispatch(setSearchIdentifier(sanitizedIdentifier))

    if (sanitizedIdentifier !== '') {
      dispatch(addSearchHistory({
        identifier: sanitizedIdentifier,
        timestamp: new Date().toISOString()
      }));
    }
  }

  const clearSearch = () => {
    setIdentifier('');

    if (search?.identifier) {
      dispatch(setSearchIdentifier(''));
    }
  }

  return (
    <div className={styles.searchBar}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div className={styles.inputContainer}>
          <input
            autoFocus
            className={styles.input}
            type="text"
            name='identifier'
            placeholder='Search by Pokemon name or id'
            value={identifier}
            onChange={(e) => {
              const { value } = e.target;

              setIdentifier(value);
            }}
          />
          {(identifier || search?.identifier) && (
            <button
              className={styles.clearSearchBtn}
              onClick={clearSearch}
              type='button'
            >
              <AiFillCloseCircle size={25} />
            </button>
          )}
        </div>

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
