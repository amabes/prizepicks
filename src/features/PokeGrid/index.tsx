
import styled from 'styled-components'
import styles from './styles.module.css';
import { useFetchPokemonsQuery } from '../../services/pokeApi';
import bkg from './bkg.jpg';
const Container = styled.div`
  padding: 1rem;
  background: rgba(255,255,255, .8);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgba(0,0,0, .5);
  margin: 1rem
`;

const PokeGrid = () => {
  const {
    data,
    isFetching
  } = useFetchPokemonsQuery(8);

  const officialArtworkFromUrl = (url: string) => {
    const urlArr = url.split('/').filter((part: string) => part !== '');
    const id = urlArr.pop();

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  return (
    <>
      <div
        className={styles.row}
        style={{
          backgroundImage: `${bkg}`
        }}
      >
        {!isFetching && data?.results && data.results.map(({ name, url }) => (
          <div className={styles.col}>
            <Container>
              <img
                src={officialArtworkFromUrl(url)}
                alt={name}
                style={{ width: '100%' }}
              />
              <div className={styles.name}>{name}</div>
            </Container>
          </div>
        ))}
      </div>
    </>
  )
}

export default PokeGrid;