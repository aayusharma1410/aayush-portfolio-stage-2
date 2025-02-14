import React from 'react';
import companiesData from '../data/companiesData';

function TargetingCompanies() {
  return (
    <div className="page-container">
      <h1>Targeting Companies</h1>
      <div className="companies-grid">
        {companiesData.map((company) => (
          <div key={company.name} className="company-card">
            <h3>{company.name}</h3>
            <p>{company.about}</p>
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TargetingCompanies;
