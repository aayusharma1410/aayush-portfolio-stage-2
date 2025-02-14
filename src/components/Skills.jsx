import React, { useState } from 'react';
import technicalSkillsData from '../data/technicalSkillsData';
import nonTechnicalSkillsData from '../data/nonTechnicalSkillsData';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCardClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="page-container">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h2>Technical Skills</h2>
          <div className="skill-grid">
            {technicalSkillsData.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                onClick={() => handleCardClick(skill)}
              >
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <h2>Non-Technical Skills</h2>
          <div className="skill-grid">
            {nonTechnicalSkillsData.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                onClick={() => handleCardClick(skill)}
              >
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedSkill && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            <h3>{selectedSkill.name}</h3>
            <p><strong>History:</strong> {selectedSkill.history}</p>
            <p><strong>About:</strong> {selectedSkill.about}</p>
            <p><strong>Uses:</strong> {selectedSkill.uses}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
