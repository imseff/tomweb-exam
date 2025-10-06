import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles.navName}>
        <Link to="/">Webino Blogs</Link>
      </span>
      <ul className={styles.navList}>
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
