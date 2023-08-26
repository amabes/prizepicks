import { PokemonAbility, PokemonType } from '../../services/pokeApi';
import formatHeight from '../../utilities/formatHeight';
import formatString from '../../utilities/formatString';
import formatWeight from '../../utilities/formatWeight';
import styles from './styles.module.css';

export interface Props {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
}

const PokeDetails = (props: Props) => {
  return (
    <div
      className={styles.pokeDetails}
    >
      <h2 className='text-capitalize'>
        {props?.name}
      </h2>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <div className='text-weight-bold'>Height</div>
          <div>{formatHeight(props?.height)}</div>
        </div>

        {props.abilities.length !== 0 && (
          <div className={styles.infoItem}>
            <div className={styles.abilities}>
              <div className='text-weight-bold'>Abilities</div>
              {props.abilities.map((item: PokemonAbility, i) => (
                <div
                  key={`pokemonAbility-${i}`}
                  className='text-capitalize'
                >
                  {formatString(item?.ability.name)}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.infoItem}>
          <div className='text-weight-bold'>Weight</div>
          <div>{formatWeight(props?.weight)}</div>
        </div>
      </div>

      <h3>
        Types
      </h3>
      {props.types.length !== 0 && (
        <div className={styles.pokemonTypes}>
          {props.types.map((item: PokemonType, i) => (
            <div
              key={`pokeType-${i}`}
              className={`${styles.pokemonType} background-color-${item?.type?.name}`}
            >
              {item?.type?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

PokeDetails.defaultProps = {
  name: '',
  height: '',
  weight: '',
  abilities: []
};


export default PokeDetails;