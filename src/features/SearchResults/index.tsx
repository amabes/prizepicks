import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useFetchPokemonQuery } from '../../services/pokeApi';
import styles from './styles.module.css';
import PokeSquare from '../PokeSquare';
import PokeDetails from '../PokeDetails';

const SearchResults = () => {
  const search = useAppSelector((state) => state.search);
  const {
    data,
    isFetching
  } = useFetchPokemonQuery(search?.identifier);

  const hasResults = useMemo(() => {
    return data?.id ? styles.hasResults : '';
  }, [data?.id])

  if (isFetching) {
    return (
      <div>
        Fetching...
      </div>
    );
  }
  return (
    <div
      className={`${styles.searchResults} ${hasResults}`}
    >
      {data?.id && (
        <>
          <div className={styles.pokeSquareContainer}>
            <PokeSquare
              imageUrl={data?.sprites?.other?.['official-artwork']?.front_default}
            />
          </div>

          <div
            className={styles.pokeSquareContainer}
          >
            <PokeDetails
              name={data?.name}
              height={data?.height}
              weight={data?.weight}
              abilities={data?.abilities}
              types={data?.types}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
