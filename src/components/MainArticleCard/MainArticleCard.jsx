import { Link } from "react-router-dom";
import styles from "./MainArticleCard.module.css";

function MainArticleCard({ image, label, date, caption, description }) {
  return (
    <div className={styles.cardContainer}>
      {/* Image section */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={caption} className={styles.image} />
      </div>

      {/* Label and date */}
      <div className={styles.cardDetails}>
        <div className={styles.labelDate}>
          <span className={styles.label}>{label}</span>
          <span>•</span>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.caption}>
          {caption}
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default MainArticleCard;
