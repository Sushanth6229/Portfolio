import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import Background from './Background';
const colors = {
  primary: '#FF6F61',
  secondary: '#6B5B95',
  accent: '#88B04B',
  background: '#282c34',
  lightText: '#f5f5f5',
  darkText: '#222222',
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

const styleContent = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${colors.background};
    color: ${colors.lightText};
    scroll-behavior: smooth;
  }
  .contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px; /* Adjust based on your design */
  width: 100%;
}
.contact-input {
  width: 100%;  /* Ensures all inputs have the same width */
  padding: 0.75rem 1rem;
  border-radius: 15px;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  margin-bottom: 1rem;  /* Add spacing between fields */
  outline: none;
  transition: box-shadow 0.3s ease;
}
.contact-input:focus {
  box-shadow: 0 0 10px ${colors.primary};
}

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(40,44,52,0.95);
    display: flex;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }
  nav ul {
    list-style: none;
    display: flex;
    padding: 0.75rem 1rem;
    margin: 0;
    gap: 2rem;
  }
  nav ul li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 600;
  }
  nav ul li:hover {
    background-color: ${colors.accent};
    color: ${colors.darkText};
  }
  nav ul li.active {
    background-color: ${colors.primary};
    color: ${colors.darkText};
    box-shadow: 0 0 8px ${colors.primary};
  }
  section {
    min-height: 100vh;
    padding: 120px 2rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    user-select: none;
  }
  h1, h2, h3 { margin: 0; }
  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    color: ${colors.primary};
    text-shadow: 0 0 3px ${colors.primary}, 0 0 3px ${colors.primary};
  }
  h2 {
    font-size: 2rem;
    color: ${colors.accent};
    margin-bottom: 2rem;
    letter-spacing: 1.3px;
  }
  p {
    max-width: 700px;
    line-height: 1.6;
    font-size: 1.15rem;
    color: #ddd;
    margin-bottom: 2.5rem;
  }
  .footer {
    padding: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #888;
    background-color: #222;
    user-select: none;
  }
  .skill-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Five columns */
  gap: 1.5rem; /* Spacing */
  padding-bottom: 1rem;
}

.skill-item {
  background-color: ${colors.accent};
  color: ${colors.darkText};
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 0 10px ${colors.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  flex: 0 0 auto;
  min-width: 150px;
  text-align: center;
  user-select: none;
}

.skill-item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px ${colors.primary};
}

    .projects-grid {
  display: grid; /* Use grid layout */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Responsive column layout */
  gap: 1.5rem; /* Spacing between items */
  padding-bottom: 1rem;
}
  .project-card {
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 1.5rem;
    margin: 0;
    flex: 0 0 auto;
    min-width: 280px;
    box-shadow: 0 4px 20px rgba(255,111,97,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px ${colors.primary};
  }
  .project-title {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: ${colors.primary};
    text-shadow: 0 0 5px ${colors.primary};
  }
  .project-desc {
    font-size: 1rem;
    color: #eee;
    flex-grow: 1;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 90%;
    gap: 1rem;
    margin-top: 1rem;
  }
  .about-stat {
  background-color: #222;
  color: #88B04B;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  height: auto;
}
.about-stat:hover {
  transform: scale(1.05); /* Scale effect on hover */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2); /* Shadow on hover */
}

  input, textarea {
    padding: 0.75rem 1rem;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    font-family: inherit;
    resize: none;
    outline: none;
    transition: box-shadow 0.3s ease;
  }
  input:focus, textarea:focus {
    box-shadow: 0 0 10px ${colors.primary};
  }
  textarea {
    min-height: 100px;
  }
  button.cta {
    background-color: ${colors.primary};
    border: none;
    color: ${colors.darkText};
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 4px 15px ${colors.primary};
    transition: transform 0.2s ease;
  }
  button.cta:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px ${colors.primary};
  }
  /* Home section with image and text side by side */
  #home > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
  #home-text {
    flex: 1 1 300px;
    max-width: 600px;
    text-align: left;
  }
  #home-text h1, #home-text h2, #home-text p {
    margin-left: 0;
  }
  #home-image {
    flex: 1 1 300px;
    max-width: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 20px ${colors.primary};
  }
  #home-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 720px) {
    #home > div {
      flex-direction: column;
    }
    #home-text {
      max-width: 100%;
      text-align: center;
    }
    #home-image {
      max-width: 250px;
    }
  }
`;

export default function App() {
  const [activeSection, setActiveSection] = React.useState('Home');

  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styleContent;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      let current = 'home';
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let sec of sections) {
        const elem = document.getElementById(sec);
        if (elem && elem.offsetTop <= scrollPos) {
          current = sec;
        }
      }
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Background />
      <nav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item}
              className={activeSection === item ? 'active' : ''}
              onClick={() => scrollToSection(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && scrollToSection(item)}
              aria-current={activeSection === item ? 'page' : undefined}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <SectionHome />
        <SectionAbout />
        <SectionProjects />
        <SectionSkills />
        <SectionContact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Sushanth Nandivelugu. All rights reserved.
      </footer>
    </>
  );
}

function SectionHome() {
  // Replace the URL below with your own profile image URL or local import
  const profileImage = 'me.jpg'; // Example image URL

  return (
    <section id="home" aria-label="Home" tabIndex={-1}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="home"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
            <motion.div
              id="home-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1>Hi, I'm Sushanth Nandivelugu</h1>
              <h2>I'm a passionate Frontend Developer & Designer</h2>
              <p>Welcome to my portfolio! Explore my projects, skills, and get in touch.</p>
            </motion.div>
            <motion.div
              id="home-image"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              aria-hidden="true"
            >
              <img src={profileImage} alt="Sushanth Nandivelugu" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function AboutStat({ title, value }) {
  return (
    <motion.div
      className="about-stat"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: '#333', // Customize the background color
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        color: '#88B04B',
      }}
    >
      <h3 style={{ margin: 0, fontSize: '2rem' }}>{value}</h3>
      <p>{title}</p>
    </motion.div>
  );
}

function SectionAbout() {
  return (
    <section id="about" aria-label="About Me" tabIndex={-1}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="about"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>About Me</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div
  className="stats"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gridGap: '1rem',
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '15px',
    color: '#88B04B',
    width: '100%',
    maxWidth: '800px',
  }}
>
              <AboutStat title="Years Coding" value="3+" />
              <AboutStat title="CGPA" value="9.01" />
              <AboutStat title="Projects" value="3" />
              <AboutStat title="Certifications" value="5+" />
              <AboutStat title="Hackethons" value="5+" />
              <AboutStat title="Internships" value="3" />
              <AboutStat title="Open Source" value="1" />
              <AboutStat title="Libraries" value="3+" />

            </div>
            <div className="about-description" style={{ flex: '1', maxWidth: '400px', marginLeft: '2rem', backgroundColor: '#222', borderRadius: '15px', padding: '2rem', color: '#f5f5f5' }}>
              <p>
                I'm Sushanth, a passionate Frontend Developer & Designer with expertise in crafting interactive applications, building intelligent systems, and solving complex problems through efficient Data Structures and Algorithms. I thrive at the intersection of innovation and practical implementation.
              </p>
              <h4>Education</h4>
              <p>B.TECH in Computer Science AI-ML [GVPCE] - [2026]</p>
              <h4>Experience</h4>
              <p>AI ML VIRTUAL INTERN [GOOGLE-AICTE] - [2024]</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}


const projectsData = [
  {
    title: 'Resume Parser',
    description: 'A web application that assigns scorese to the resumes acoording to the given job description using naturl laguage processing and machine learning.',
  },
  {
    title: 'Yummy',
    description: 'A web app that allows users to see their nearby restaurants, featuring search by location by given latitudes and longitudes ,user-friendly interface. ',
  },
  {
    title: 'Fire Detection System',
    description: 'A web application that detects fire in the given image using machine learning and computer vision.',
  },
];

function SectionProjects() {
  return (
    <section id="projects" aria-label="Projects" tabIndex={-1}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="projects"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Projects</h2>
          <div className="projects-grid" aria-live="polite" tabIndex={0}>
            {projectsData.map((proj, idx) => (
              <motion.div
                className="project-card"
                key={idx}
                whileHover={{ scale: 1.05, boxShadow: `0 8px 30px ${colors.primary}` }}
                tabIndex={0}
                aria-label={`${proj.title} project`}
                role="article"
              >
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

const skillsData = [
  { skill: 'HTML', level: 'Advanced' },
  { skill: 'CSS ', level: 'Advanced' },
  { skill: 'JavaScript', level: 'Advanced' },
  { skill: 'React.js', level: 'Advanced' },
  { skill: 'Node.js', level: 'Advanced' },
  { skill: 'MongoDB', level: 'Intermediate' },
  { skill: 'DBMS', level: 'Beginner-Intermediate' },
  { skill: 'C++', level: 'Advanced' },
  { skill: 'Python', level: 'Advanced' },
  { skill: 'Data Structures & Algorithms', level: 'Intermediate-Advanced' },
  { skill: 'Machine Learning', level: 'Intermediate-Advanced' },
  { skill: 'Deep Learning', level: 'Intermediate' },
];

function SectionSkills() {
  return (
    <section id="skills" aria-label="Skills" tabIndex={-1}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="skills"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Technical Skills</h2>
          <div className="skill-list" aria-live="polite" tabIndex={0}>
            {skillsData.map((item, index) => (
              <div key={index} className="skill-item" tabIndex={0} role="listitem">
                <h3>{item.skill}</h3>
                <p>{item.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}



function SectionContact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: 'Please fill all fields.' });
      return;
    }
    setStatus({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" aria-label="Contact" tabIndex={-1}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="contact"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} aria-live="polite" noValidate className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-label="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-label="Your Email"
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
              aria-label="Your Message"
              className="contact-input"
            />
            <button type="submit" className="cta" aria-live="polite">
              Send Message
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} color={colors.primary} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={30} color={colors.primary} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} color={colors.primary} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
