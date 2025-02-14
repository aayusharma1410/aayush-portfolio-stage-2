import React, { useState, useEffect } from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import Welcome from './Welcome.jsx'
    import './index.css'
    import { BrowserRouter } from 'react-router-dom';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </React.StrictMode>,
    )

    function MainContent() {
      const [formSubmitted, setFormSubmitted] = useState(false);

      useEffect(() => {
        const storedValue = localStorage.getItem('formSubmitted');
        if (storedValue) {
          setFormSubmitted(storedValue === 'true');
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('formSubmitted', formSubmitted);
      }, [formSubmitted]);


      const handleFormSubmit = () => {
        setFormSubmitted(true);
      };

      return (
        <>
          { !formSubmitted ? (
            <Welcome onFormSubmit={handleFormSubmit} />
          ) : (
            <App />
          )}
        </>
      );
    }
