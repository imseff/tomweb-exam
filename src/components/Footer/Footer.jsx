// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from '../../assets/FontAwesome_Icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/FontAwesome_Icons/instagram.svg';
import { ReactComponent as XIcon } from '../../assets/FontAwesome_Icons/x-solid.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerCopyright}>© Webino Blogs 2023</span>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <Link to="/"><Facebook className={styles.footerIcon} /></Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/"><Instagram className={styles.footerIcon} /></Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/"><XIcon className={styles.footerIcon} /></Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
