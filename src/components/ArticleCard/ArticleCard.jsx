import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";

function ArticleCard({ image, label, date, caption }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={caption} className={styles.image} />
      </div> 
      <div className={styles.cardDetails}>
        <div className={styles.labelDate}>
          <span className={styles.label}>{label}</span>
          <span>•</span>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.caption}>
          {caption}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
