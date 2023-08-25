
import styles from './styles.module.css';
import { useFetchPokemonsQuery } from '../../services/pokeApi';
import bkg from './bkg.jpg';
import PokeSquare from '../PokeSquare';

const PokeGrid = () => {
  const {
    data,
    isFetching
  } = useFetchPokemonsQuery(8);

  return (
    <>
      <div
        className={styles.pokeGrid}
        style={{
          backgroundImage: `${bkg}`
        }}
      >
        {!isFetching && data?.results && data.results.map(({ name, url }, i) => (
          <div className={styles.col} key={`PokeGridItem-${i}`}>
            <PokeSquare
              name={name}
              url={url}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default PokeGrid;