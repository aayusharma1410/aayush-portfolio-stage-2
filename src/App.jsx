import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './components/Home';
    import About from './components/About';
    import Skills from './components/Skills';
    import TargetingCompanies from './components/TargetingCompanies';
    import Footer from './components/Footer';
    import Projects from './components/Projects';

    function App() {
      return (
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/targeting-companies" element={<TargetingCompanies />} />
          </Routes>
          <Footer />
        </div>
      );
    }

    export default App;
