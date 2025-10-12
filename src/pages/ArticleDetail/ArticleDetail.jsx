// src/pages/ArticleDetail/ArticleDetail.jsx
import styles from './ArticleDetail.module.css';
import { articles } from '../../data/article.js';
import articleImage from '../../assets/Article_images/Sports/Sports-image-1.png';
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx';
import profileImg from "../../assets/FontAwesome_Icons/user-regular.svg";
import calendar from "../../assets/FontAwesome_Icons/calendar-regular.svg";
import { images } from '../../data/images.js';

export default function ArticleDetail() {
  // For now, pick the first article
  const article = articles[0];

  return (
    <div className={styles.container}>
      <div className={styles.bgRectangle}></div>
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <img 
            src={articleImage} 
            alt={article.title} 
            className={styles.image} 
          />
        </div>

        <div className={styles.article}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {article.title}
            </h1>

            <p className={styles.description}>
              {article.description}
            </p>

            <div className={styles.authorDate}>
              <div className={styles.author}>
                <img 
                  src={profileImg} 
                  alt="" 
                  className={styles.profileImg}
                />
                {article.author}
              </div>

              <div className={styles.date}>
                <img 
                  src={calendar} 
                  alt="" 
                  className={styles.calendar}
                />
                {article.date}
              </div>          
            </div>
          </div>

          <div className={styles.content}>
            {article.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.articles}>
        <h2 className={styles.articlesTitle}>
          Related Articles
        </h2>

        <div className={styles.articlesContainer}>
          <ArticleCard  
            image={images.sports[1]}
            label="SPORTS"
            date="September 09, 2023"
            caption="Ang Liga: UST settles for another draw"
          />

          <ArticleCard  
            image={images.sports[2]}
            label="SPORTS"
            date="September 04, 2023"
            caption="EJ Obiena bounces back; takes top podium of ISTAF Berlin"
          />

          <ArticleCard  
            image={images.sports[3]}
            label="SPORTS"
            date="September 03, 2023"
            caption="Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win"
          />

          <ArticleCard  
            image={images.blogs[0]}
            label="BLOGS"
            date="August 31, 2023"
            caption="Ang Agosto 2023 ay isang mabatong daan"
          />
        </div>
      </div>
    </div>
  );
}
