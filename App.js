import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import linkedinlogo from './src/assets/linkedin.png';
import githublogo from './src/assets/output-onlinepngtools.png';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const background = document.querySelector('.background');
      const rect = background.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      background.style.background = `radial-gradient(circle at ${x}px ${y}px, #250f3a 10%, #11011b 50%)`;
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('.nav-link');

      let index = sections.length;

      while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      if (index >= 0) {
        navLinks[index].classList.add('active');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="background"></div>
      <div className="main-content">
        <div className="about-sections">
          <h2 className="name">Chahel Nerusu</h2>
          <h2 className="role">Full Stack Developer</h2>
          <div className="navigation">
            <ul>
              <li><a href="#about" className="nav-link">ABOUT</a></li>
              <li><a href="#experience" className="nav-link">EXPERIENCE</a></li>
              <li><a href="#projects" className="nav-link">PROJECTS</a></li>
            </ul>
          </div>
          <div className="social-logos">
            <div className="linkedin-logo">
              <a href="https://www.linkedin.com/in/chahel-nerusu-1151761b1/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinlogo} alt="LinkedIn" className="social-logo" />
              </a>
            </div>
            <div className="github-logo">
              <a href="https://github.com/ChahelNerusu/Portfolio" target="_blank" rel="noopener noreferrer">
                <img src={githublogo} alt="GitHub" className="social-logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <div id="about" className="section">
          <p style={{fontSize:'17px'}}>Hello! I'm Chahel Nerusu, a dedicated Computer Science student at the University of California, Santa Cruz. My journey into the world of computer science was sparked by a childhood fascination with solving puzzles and an innate curiosity about how things work.</p>

<p style={{fontSize:'17px'}}>This passion led me to explore various programming languages like Python, JavaScript, Java, C/C++, Kotlin, and GoLang. Over time, I became proficient in frameworks such as React, Angular, and Redux, and backend technologies like Node.js, Express.js, SQL, and Firebase.</p>

<p style={{fontSize:'17px'}}>What truly excites me is the potential to blend finance with computer science. Growing up, I saw how financial literacy and technology could transform lives, and I dreamed of creating innovative solutions to bridge the gap between these fields. Whether it's developing algorithms for stock predictions, automating financial processes, or building intuitive financial tools, I am driven by the vision of making finance more accessible and efficient through the power of technology. This unique intersection fuels my passion and guides my journey in the world of computer science.</p>
          </div>

          <div id="experience" className="section">
            <a href="https://www.spendgo.com/" target="_blank" rel="noopener noreferrer" className="job-link">
              <div className="job">
                <div className="dates">June 2024 - Present</div>
                <div className="job-details">
                  <h3 className="job-title">Software Engineering Intern • Spendgo</h3>
                  <p>During my internship at Spendgo, I assisted in developing and testing new features for their customer engagement platform. I collaborated with cross-functional teams to ensure seamless integration with point-of-sale systems and contributed to code quality through reviews and debugging. This experience allowed me to gain hands-on skills in a dynamic environment while learning industry best practices.</p>
                  <div className="tech-tags">
                    <span>TestNG</span><span>Java</span><span>JavaScript</span><span>Selenium</span><span>Jenkins</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://tech4good.soe.ucsc.edu/" target="_blank" rel="noopener noreferrer" className="job-link">
              <div className="job">
                <div className="dates">Sept 2023 - Present</div>
                <div className="job-details">
                  <h3 className="job-title">Fullstack Software Engineer • Tech4Good</h3>
                  <p>At Tech4Good, I spearheaded the development of a user-centric website focused on anxiety assessment, leveraging Angular to create a responsive and intuitive interface. I collaborated with a multidisciplinary team of designers, mental health experts, and fellow engineers to integrate clinical insights into the website's functionality. Additionally, I implemented advanced Angular features, including data-binding and dependency injection, to create a dynamic and interactive user experience.</p>
                  <div className="tech-tags">
                    <span>Angular</span><span>TypeScript</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://tech4good.soe.ucsc.edu/" target="_blank" rel="noopener noreferrer" className="job-link">
              <div className="job">
                <div className="dates">Jan 2024 - June 2024</div>
                <div className="job-details">
                  <h3 className="job-title">Intern Software Engineer • Davie.AI</h3>
                  <p>During my internship at Davie.AI, I designed and developed innovative software programs to automate the creation of ad campaigns, significantly enhancing marketing efficiency and effectiveness. I conducted rigorous testing to ensure robustness, reliability, and compatibility with Google's advertising platforms. Additionally, I analyzed and interpreted data from campaign performances, providing insights to refine the ad creation algorithms for improved results.</p>
                  <div className="tech-tags">
                    <span>Python</span><span>JavaScript</span><span>SQL</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://engineering.ucsc.edu/" target="_blank" rel="noopener noreferrer" className="job-link">
              <div className="job">
                <div className="dates">Sep 2020 - Present</div>
                <div className="job-details">
                  <h3 className="job-title">CSE 12 Tutor</h3>
                  <p>As a CSE 12 Tutor/Grader at UCSC, I provided comprehensive tutoring services in Computer Systems and Assembly Language to a diverse group of undergraduate students, enhancing their understanding of key concepts and practical applications. I collaborated with course instructors to design and update course materials, including lecture notes, lab exercises, and online resources, to improve the learning experience. This role allowed me to develop strong communication skills and a deep understanding of the subject matter.</p>
                  <div className="tech-tags">
                    <span>Python</span><span>JavaScript</span><span>SQL</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div id="projects" className="section">
            <div className="job">
              <div className="dates">Jan 2020 - May 2020</div>
              <div className="job-details">
                <h3 className="job-title">Gesture Controlled Drone</h3>
                <p>For the drone research project, I developed an innovative gesture-controlled drone system using a combination of Python, TensorFlow, Keras, DroneKit, and MediaPipe technologies. I implemented advanced artificial intelligence algorithms, specifically convolutional neural networks (CNNs), to enable the drone to recognize and interpret human hand gestures in real-time. The system's integration with DroneKit allowed seamless communication between the drone and the control interface, enabling responsive and accurate flight control based on detected gestures. This project showcased my ability to integrate multiple technologies into a cohesive and functional system.</p>
                <div className="tech-tags">
                  <span>Python</span><span>TensorFlow</span><span>Keras</span><span>DroneKit</span>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="dates">Jun 2020 - Aug 2020</div>
              <div className="job-details">
                <h3 className="job-title">AI Trading Bot</h3>
                <p>In the Alpaca API stock predictor project, I created a stock prediction application using the Alpaca API for real-time market data and trading. Leveraging machine learning models, I developed algorithms to analyze historical stock data and predict future stock movements. This project involved extensive data analysis, feature engineering, and model tuning to achieve accurate predictions, demonstrating my proficiency in data science and financial technology.</p>
                <div className="tech-tags">
                  <span>Python</span><span>TensorFlow</span><span>Keras</span><span>Alpaca API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
