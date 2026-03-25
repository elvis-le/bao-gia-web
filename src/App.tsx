import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quotation from './pages/Quotation';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Hosting from './pages/Hosting';
import Domain from './pages/Domain';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bao-gia" element={<Quotation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/ten-mien" element={<Domain />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
