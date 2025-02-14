import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Aayush Sharma. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.instagram.com/__aayusharma__/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://github.com/aayusharma1410" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/aayush-sharma-1913a9286/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
