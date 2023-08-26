import { useMemo } from 'react';
import styles from './styles.module.css'
import { OFFICIAL_ARTWORK_URL } from '../../constants/general';

const PokeSquare = ({
  imageUrl = '',
  url = '',
  name = ''
}) => {

  const officialArtworkFromUrl = useMemo(() => {
    const urlArr = url.split('/').filter((part: string) => part !== '');
    const id = urlArr.pop();

    return `${OFFICIAL_ARTWORK_URL}/${id}.png`;
  }, [url]);

  return (
    <div className={styles.container}>
      <img
        data-testid="PokeSquare-img"
        src={imageUrl || officialArtworkFromUrl}
        alt={name}
        style={{ width: '100%' }}
      />
      {name && (
        <div
          className='text-capitalize'
          data-testid="PokeSquare-name"
        >
          {name}
        </div>
      )}
    </div>
  );
}

export default PokeSquare;
