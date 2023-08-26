import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className={styles.footer}
    >
      <div>
        by <a href="https://linkedin.com/in/alanmabry">Alan Mabry</a>
      </div>
      <div>
        <a href="https://www.freepik.com/free-vector/abstract-organic-lines-background_9406224.htm#query=repeating%20background&position=2&from_view=keyword&track=ais">Image by starline</a> on Freepik
      </div>
    </footer>
  );
}

export default Footer;
