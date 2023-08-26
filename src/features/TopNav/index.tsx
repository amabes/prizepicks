import { MdOutlineCatchingPokemon } from 'react-icons/md';
import styles from './styles.module.css';

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <MdOutlineCatchingPokemon size={30} />
      <div className={styles.siteName}>
        Pokédex
      </div>
    </div>
  );
};

export default TopNav;
