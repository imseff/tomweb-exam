import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Navbar.module.css'; 
import burger from '../../assets/FontAwesome_Icons/bars-solid.svg';
import x from '../../assets/FontAwesome_Icons/x-solid.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={styles.navbar}>
      <span className={styles.navName}>
        <Link to="/">Webino Blogs</Link>
      </span>
      <span className={styles.mobileNavName}>
        <Link to="/">WB</Link>
      </span>

      <button className={styles.hamburgerBtn} onClick={toggleMenu}>
       {isMenuOpen ? (
           <img src={x} alt="Close menu" className={`${styles.icon} ${styles.xBtn}`} />
        ):(
          
          <img src={burger} alt="Open menu" className={styles.icon} />
        )}
      </button>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link to="/section/reports">REPORTS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/section/blogs">BLOGS</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/section/sports">SPORTS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

