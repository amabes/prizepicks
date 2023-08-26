import { useMemo } from 'react';
import styles from './styles.module.css'

const PokeSquare = ({
  imageUrl = '',
  url = '',
  name = ''
}) => {

  const officialArtworkFromUrl = useMemo(() => {
    const urlArr = url.split('/').filter((part: string) => part !== '');
    const id = urlArr.pop();

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }, [url]);

  return (
    <div className={styles.container}>
      <img
        src={imageUrl || officialArtworkFromUrl}
        alt={name}
        style={{ width: '100%' }}
      />
      {name && (
        <div className='text-capitalize'>{name}</div>
      )}
    </div>
  );
}

export default PokeSquare;
