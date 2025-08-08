import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ChimpPage from './pages/ChimpPage';
import LitePage from './pages/LitePage';
import KitPage from './pages/KitPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/chimp" element={<ChimpPage />} />
          <Route path="/lite" element={<LitePage />} />
          <Route path="/kit" element={<KitPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;