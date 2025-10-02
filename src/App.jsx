import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SectionPage from './pages/SectionPage';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/section/:sectionName" element={<SectionPage />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
