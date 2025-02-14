import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="https://i.postimg.cc/xTt3WMDB/DALL-E-2025-02-14-12-09-58-A-highly-attractive-and-professional-logo-for-a-portfolio-website-desig.webp" alt="Logo" style={{ height: '40px', verticalAlign: 'middle' }} />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/targeting-companies" className="nav-link">Targeting Companies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
