import ArticleCard from "../../components/ArticleCard/ArticleCard.jsx";
import MainArticleCard from "../../components/MainArticleCard/MainArticleCard.jsx";
import { images } from "../../data/images.js"; 
import styles from "./LandingPage.module.css";
import headerImage from "../../assets/Article_images/Sports/Sports-image-1.png"
import calendarImage from "../../assets/FontAwesome_Icons/calendar-regular.svg"

export default function LandingPage() {
  return(
    <>
      <div className={styles.landingContainer}>
        <div className={styles.headerImage}>
          <img src={headerImage} alt="" className={styles.image}/>
          
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>
              Tiger Spikers jolt Blue Eagles for V-League
            </h1>
            <p className={styles.headerDescription}>
              <span className={styles.headerCategory}>SPORTS</span> — The Tiger Spikers
              now hold a 5-1 win-loss record while the Blue Eagles dropped to 4-1 in
              the V-League semi-finals.
            </p>
            <div className={styles.date}>
              <img
                className={styles.calendar}
                src={calendarImage}
                alt="calendar icon"
              />
              <time dateTime="2023-09-10">September 10, 2023</time>
            </div>
          </div>
          
        </div>
        <div className={styles.articles}>
          <h2 className={styles.articlesTitle}>Latest</h2>
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
              date="August 11, 2023"
              caption="Ang Agosto 2023 ay isang mabatong daan"
            />
          </div>
        </div>

        <div className={styles.mainArticlesBodyContainer}>
          <div className={styles.mainArticles}>
            <div className={styles.mainArticlesContainer}>
              <MainArticleCard  
                image={images.reports[1]}
                label="REPORTS"
                date="August 16, 2023"
                caption="Tomasino pasok sa top 10 ng kauna-unahang food tech boards’"
                description="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
              />
              <MainArticleCard  
                image={images.reports[3]}
                label="REPORTS"
                date="August 17, 2023"
                caption="Tiongco: ‘Maging totoo sa sarili, mamayagpag"
                description="ICYMI: Ayon kay Tiongco, hindi kailangang itago ang totoong sarili upang mapabilang sa paaralan dahil ang pagiging totoo pati na rin ang pagtitiwala ang bubuo ng makabuluhang koneksyon sa buhay"
              />
            </div>
          </div>
        </div>

        <div className={styles.articles}>
          <h2 className={styles.articlesTitle}>More Articles</h2>
          <div className={styles.articlesContainer}>
            <ArticleCard  
              image={images.reports[0]}
              label="REPORTS"
              date="August 21, 2023"
              caption="Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school"
            />
            <ArticleCard  
              image={images.blogs[1]}
              label="BLOGS"
              date="August 17, 2023"
              caption="Liham para sa isang batang Tomasino"
            />
            <ArticleCard  
              image={images.blogs[2]}
              label="BLOGS"
              date="August 11, 2023"
              caption="Yakapin ang bawat sandali, Tomasino!: Mga payo para sa unang taon sa kolehiyo"
            />
            <ArticleCard  
              image={images.blogs[3]}
              label="BLOGS"
              date="July 31, 2023"
              caption="‘Barbie’ celebrates and criticizes the complexities of womanhood"
            />
          </div>
        </div>
      </div>
    </>
  );
}