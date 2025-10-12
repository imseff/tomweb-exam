import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage/LandingPage';
import SectionPage from './pages/SectionPage/SectionPage.jsx';
import ArticleDetail from './pages/ArticleDetail/ArticleDetail.jsx';
import PreviewPage from './pages/PreviewPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const location = useLocation();
  return (
    <>
      <div className="bodyContainer">
        <Navbar/>
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path='/' element={<LandingPage />} /> 
              <Route path="/section/:sectionName" element={<SectionPage />} />
              <Route path="/article" element={<ArticleDetail />} />
            </Routes>
          </AnimatePresence>
          <Footer/>
      </div>
    </>
  );
}

export default App;
