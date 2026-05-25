import React from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PHP",
  "MySQL",
  "Python",
  "GitHub",
];

const experiences = [
  {
    role: "PHP Developer Intern",
    company: "Travbizz IT Solution",
    location: "Noida",
    date: "May 2024 - Jul 2024",
    points: [
      "Developed a fully responsive and dynamic e-commerce website using JavaScript, PHP, and MySQL.",
      "Created an admin dashboard for clients to manually update and manage website content.",
      "Improved navigation across devices with responsive UX and optimized data retrieval flows.",
    ],
    stack: "JavaScript, PHP, MySQL, HTML, CSS",
  },
  {
    role: "React.js Development Intern",
    company: "Manyversity",
    location: "Lucknow",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Built dynamic web applications using React.js and reusable UI components.",
      "Collaborated with team members on interface design, debugging, and code reviews.",
      "Improved performance and gained hands-on experience with ES6+, JSX, Git, and agile workflows.",
    ],
    stack: "React.js, JavaScript, JSX, Git, API",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "zaidmek786@gmail.com",
    href: "mailto:zaidmek786@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "7068204914",
    href: "tel:+917068204914",
    icon: <FaPhoneAlt />,
  },
  {
    label: "GitHub",
    value: "Zed0000078",
    href: "https://github.com/Zed0000078",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    value: "Mohammad Zaid",
    href: "https://www.linkedin.com/in/mohammad-zaid-b04174206/",
    icon: <FaLinkedin />,
  },
];

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero__content">
          <span className="eyebrow">Front-end Developer</span>
          <span className="availability">Available for React.js roles</span>
          <h1>Mohammad Zaid</h1>
          <p>
            I build responsive, interactive web experiences with React.js,
            JavaScript, PHP, Node.js, and MySQL.
          </p>

          <div className="hero__actions">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero__panel" aria-label="Portfolio highlights">
          <div className="profile-card">
            <div className="profile-card__avatar">MZ</div>
            <span>React.js Developer</span>
            <strong>Bengaluru</strong>
          </div>
          <div className="hero__stats">
            <div>
              <strong>2</strong>
              <span>Internships</span>
            </div>
            <div>
              <strong>8.2</strong>
              <span>CGPA</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Skills</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <span className="eyebrow">About</span>
          <h2>Developer focused on clean UI, smooth UX, and practical software.</h2>
        </div>
        <p>
          Skilled in front-end technologies like HTML, CSS, JavaScript, and
          React.js, with back-end experience in Node.js, PHP, Express.js, SQL,
          and MySQL. I enjoy creating responsive interfaces that feel clear,
          fast, and user friendly.
        </p>
      </section>

      <section className="skills" id="skills">
        <span className="eyebrow">Skills</span>
        <h2>Tech stack I work with</h2>
        <div className="skills__grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <span className="eyebrow">Experience</span>
        <h2>Internships and real-world work</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={item.role}>
              <div className="timeline__date">
                <span>{item.date}</span>
                <small>{item.location}</small>
              </div>
              <div className="timeline__card">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <strong>Tech Stack: {item.stack}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading">
          <span className="eyebrow">Featured project</span>
          <h2>Movie Dashboard App</h2>
        </div>
        <article className="project-card">
          <div>
            <span>React.js - API - JavaScript</span>
            <h3>Interactive movie discovery dashboard</h3>
            <p>
              Designed and developed a sleek movie dashboard using React.js.
              Integrated third-party APIs to fetch and display movie data
              dynamically with a responsive, interactive interface.
            </p>
            <a href="https://github.com/Zed0000078" target="_blank" rel="noreferrer">
              View GitHub <FaExternalLinkAlt />
            </a>
          </div>
          <div className="project-card__visual">
            <span>API</span>
            <span>React</span>
            <span>JSX</span>
          </div>
        </article>
      </section>

      <section className="education">
        <div>
          <span className="eyebrow">Education</span>
          <h2>B.Tech in Computer Science and Engineering</h2>
          <p>Integral University, Lucknow - CGPA 8.2 - 2020 to 2024</p>
        </div>
        <div>
          <span className="eyebrow">Certificate</span>
          <h2>Google Cloud Study Jam</h2>
          <p>Built skills in deploying AI models on Google Cloud Platform for scalable solutions.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Let us build something useful.</h2>
          <p>
            Based in Bengaluru, Karnataka. Open to front-end, React.js, and
            full-stack opportunities.
          </p>
          <span className="location">
            <FaMapMarkerAlt /> Bengaluru, Karnataka
          </span>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {item.icon}
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
