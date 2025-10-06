// src/pages/SectionPage/SectionPage.jsx
import { useParams } from "react-router-dom";
import SectionArticleCard from "../../components/SectionArticleCard/SectionArticleCard.jsx";
import { sectionArticles } from "../../data/sectionArticles.js";
import styles from "./SectionPage.module.css";

function SectionPage() {
  const { sectionName } = useParams();
  const articles = sectionArticles[sectionName] || [];

  // Section titles (capitalized)
  const sectionTitles = {
    reports: "Reports",
    blogs: "Blogs",
    sports: "Sports",
  };

  // Section descriptions
  const sectionDescriptions = {
    reports:
      "Delve into in-depth analysis and comprehensive reports on trending topics, industry trends, and insightful research findings.",
    blogs:
      "Discover a world of knowledge and inspiration in our blog section, featuring insightful articles on a variety of topics.",
    sports:
      "From game-changing plays to inspiring athlete profiles, we've got your front-row seat to the exciting realm of sports.",
  };

  // Section background colors
  const sectionColors = {
    reports: "rgba(221, 142, 84, 1)",
    blogs: "rgba(173, 142, 191, 1)",
    sports: "rgba(187, 112, 130, 1)",
  };


  const sectionTitle = sectionTitles[sectionName] || "Section";
  const sectionDescription = sectionDescriptions[sectionName] || "";
  const sectionColor = sectionColors[sectionName] || "#ffffff";

  return (
    <div className={styles.landingContainer}>
      <div className={styles.sectionHeading} style={{ backgroundColor: sectionColor }}>
        <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
        <p className={styles.sectionDescription}>{sectionDescription}</p>
      </div>

      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <SectionArticleCard
            key={index}
            image={article.image}
            label={article.label}
            date={article.date}
            caption={article.caption}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionPage;
