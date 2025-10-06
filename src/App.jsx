import { Routes, Route } from 'react-router-dom';
import { sectionArticles } from './data/sectionArticles.js';
import LandingPage from './pages/LandingPage/LandingPage';
import SectionPage from './pages/SectionPage/SectionPage.jsx';
import ArticleDetail from './pages/ArticleDetail/ArticleDetail.jsx';
import PreviewPage from './pages/PreviewPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} /> 
        <Route path="/section/:sectionName" element={<SectionPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
