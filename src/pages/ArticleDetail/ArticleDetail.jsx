// src/pages/ArticleDetail/ArticleDetail.jsx
import styles from './ArticleDetail.module.css'; // use .module.css, not .jsx
import { articles } from '../../data/article.js';
import articleImage from '../../assets/Article_images/Sports/Sports-image-1.png';
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx';

export default function ArticleDetail() {
  // For now, pick the first article
  const article = articles[0];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <img src={articleImage} alt={article.title} className={styles.image} />
        </div>
        <div className={styles.article}>
          <div className={styles.header}>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.description}>{article.description}</p>
            <p className={styles.authorDate}>
              <strong>{article.author}</strong> | {article.date}
            </p>
          </div>

          <div className={styles.content}>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Related cards or sidebar */}
      <div className={styles.cards}>
        {/* You can map over other articles here if needed */}
        {articles.slice(1, 4).map((card, index) => (
          <ArticleCard
            key={index}
            image={card.image}
            label={card.label}
            date={card.date}
            caption={card.title}
          />
        ))}
      </div>
    </div>
  );
}
