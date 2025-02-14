import React, { useState } from 'react';

    function Welcome({ onFormSubmit }) {
      const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSf8fOuehRsnZ1Lid0X-m2HYDc5nCFl-jJfV-AT2vvR2GpW9xw/viewform?usp=sharing";
      const [screenshot, setScreenshot] = useState(null);

      const handleScreenshotUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setScreenshot(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      const handleSubmitScreenshot = () => {
        if (screenshot) {
          localStorage.setItem('formScreenshot', screenshot);
          onFormSubmit();
        } else {
          alert('Please upload a screenshot first.');
        }
      };

      return (
        <div className="welcome-container">
          <h1>Welcome to My Portfolio!</h1>
          <p>
            Before you explore my portfolio, please fill out this short Google Form:
          </p>
          <a href={formLink} target="_blank" rel="noopener noreferrer">
            Fill out the form
          </a>
          <p>
            Thank you for your time! After submitting the form, upload a screenshot of the submission confirmation and click "Submit Screenshot" to access the portfolio.
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleScreenshotUpload}
            id="chooseFile"
            style={{ display: 'none' }}
          />
          <label htmlFor="chooseFile" className="custom-file-upload">
            Choose File
          </label>
          {screenshot && (
            <div>
              <img src={screenshot} alt="Screenshot Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
          )}
          <button onClick={handleSubmitScreenshot} disabled={!screenshot} className="submit-screenshot-button">
            Submit Screenshot
          </button>
        </div>
      );
    }

    export default Welcome;
