import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
import Loading from './components/Loading';

const LazyHome = React.lazy(() => import('./components/pages/Home'));
const LazyAbout = React.lazy(() => import('./components/pages/About'));
const LazySpeakers = React.lazy(() => import('./components/pages/Speakers'));
const LazyTeam = React.lazy(() => import('./components/pages/Team'));
const LazyGallery = React.lazy(() => import('./components/pages/Gallery'));
const LazyPastSeasons = React.lazy(() => import('./components/pages/PastSeasons'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/speakers" element={<LazySpeakers />} />
            <Route path="/team" element={<LazyTeam />} />
            <Route path="/gallery" element={<LazyGallery />} />
            <Route path="/pastseasons" element={<LazyPastSeasons />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
