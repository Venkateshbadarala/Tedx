import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
import Loading from './components/Loading';


const LazyHome = React.lazy(() => import('./components/pages/Home'));
const LazyAbout = React.lazy(() => import('./components/pages/About'));
const LazySpeakers = React.lazy(() => import('./components/pages/Speakers'));
const LazyTeam = React.lazy(() => import('./components/pages/Team'));
const LazyGallery = React.lazy(() => import('./components/pages/Gallery'));
const LazyPastSeasons = React.lazy(() => import('./components/pages/PastSeasons'));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/speakers"
            element={
              <Suspense fallback={<Loading />}>
                <LazySpeakers />
              </Suspense>
            }
          />
          <Route
            path="/team"
            element={
              <Suspense fallback={<Loading />}>
                <LazyTeam />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGallery />
              </Suspense>
            }
          />
          <Route
            path="/pastseasons"
            element={
              <Suspense fallback={<Loading />}>
                <LazyPastSeasons />
              </Suspense>
            }
          />
          <Route
            path="/loading"
            element={<Loading />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
