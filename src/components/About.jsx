import React from 'react';

    function About() {
      return (
        <div className="page-container">
          <div className="about-header">
            <h1>About Me</h1>
            <div className="profile-container">
              <img
                src="https://i.ibb.co/TMm9mBz3/Whats-App-Image-2025-02-07-at-11-23-25-AM.jpg"
                alt="Aayush Sharma"
                className="profile-photo"
              />
              <div className="cv-resume-buttons">
                <a href="https://aayush-sharma-resume.tiiny.site" target="_blank" rel="noopener noreferrer" className="resume-button">
                  Resume
                </a>
              </div>
            </div>
          </div>

          <h2>👨‍💻 Personal Introduction</h2>
          <p>Hello! I’m Aayush Sharma, a B.Tech student at Rajasthan Technical University, deeply passionate about software development, problem-solving, and innovation. My journey into technology began with a fascination for how software works, and over time, this curiosity has transformed into a strong desire to build efficient, scalable, and impactful applications.</p>

          <h2>🎓 Educational Background</h2>
          <p>B.Tech – Rajasthan Technical University (Pursuing)</p>
          <p>10th & 12th – Kendriya Vidyalaya No. 1, Jaipur (First Division)</p>

          <h2>💻 Technical Skills</h2>
          <p>I have a solid foundation in multiple programming languages, frameworks, and databases, allowing me to develop full-stack applications and optimize backend systems:</p>
          <ul>
            <li>Programming Languages: C, C++, Java, JavaScript, TypeScript, Python</li>
            <li>Frontend Technologies: HTML, CSS</li>
            <li>Databases: SQL, MongoDB</li>
            <li>Development Areas: Web Development, Backend Optimization, Database Management</li>
          </ul>

          <h2>🤝 Soft Skills</h2>
          <p>Apart from my technical expertise, I excel in team-oriented environments and possess strong communication and leadership qualities:</p>
          <ul>
            <li>Teamwork & Collaboration</li>
            <li>Leadership & Team Building</li>
            <li>Effective Communication</li>
          </ul>

          <h2>🚀 Professional Approach</h2>
          <p>I firmly believe that software development is not just about writing code—it’s about understanding problems, brainstorming effective solutions, and collaborating with teams to build impactful applications. Whether it’s developing a responsive web application, optimizing backend systems, or managing databases, I strive for excellence in every project.</p>

          <h2>🌟 My Vision</h2>
          <p>This portfolio is a reflection of my skills, projects, and experiences as a growing software engineer. I am always eager to explore new technologies, take on challenging projects, and collaborate with like-minded individuals to create meaningful solutions.</p>

          <h2>📩 Let’s Connect!</h2>
          <p>If you're looking for a dedicated, passionate, and skilled software developer, feel free to reach out—let’s build something amazing together! 🚀</p>
        </div>
      );
    }

    export default About;
