import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";

function ArticleCard({ image, label, date, caption }) {
  return (
    <div className={styles.cardContainer}>
      {/* Image section */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={caption} className={styles.image} />
      </div>

      {/* Label and date */}
      <div className={styles.labelDate}>
        <span className={styles.label}>{label}</span>
        <span>•</span>
        <span className={styles.date}>{date}</span>
      </div>

      {/* Caption / description */}
      <div className={styles.caption}>
        {caption}
      </div>
    </div>
  );
}

export default ArticleCard;
