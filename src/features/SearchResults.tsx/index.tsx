import { useAppSelector } from "../../app/hooks";
import { useFetchPokemonQuery } from "../../services/pokeApi";
import styles from './styles.module.css';

const SearchResults = () => {
  const search = useAppSelector((state) => state.search);
  const {
    data,
    isFetching
  } = useFetchPokemonQuery(search?.identifier);

  if (isFetching) {
    return (
      <div>
        Fetching...
      </div>
    );
  }

  <p>
    {search?.identifier}
  </p>

  return (
    <div className={styles.searchResults}>
      {data && (
        <div>
          <img
            src={data?.sprites?.other['official-artwork'].front_default}
            height="40"
            alt={data.name}
          />
          {data.name}
        </div>
      )}

    </div>
  );
}

export default SearchResults;