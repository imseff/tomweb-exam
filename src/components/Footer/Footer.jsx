// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import facebook from '../../assets/FontAwesome_Icons/facebook.svg';
import instagram from '../../assets/FontAwesome_Icons/instagram.svg';
import xicon from '../../assets/FontAwesome_Icons/x-twitter.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerCopyright}>© Webino Blogs 2023</span>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <Link to="/"><img src={facebook} alt="Facebook" className={styles.footerIcon} /></Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/"><img src={xicon} alt="X" className={styles.footerIcon} /></Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/"><img src={instagram} alt="Instagram" className={styles.footerIcon} /></Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
