import React , { useState, useEffect ,useRef}from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faFileAlt, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from './images/avatar.jpg'; // Make sure the image is in the correct path
import ProjectCard from "./ProjectCard/ProjectCard";
import ReferenceCard from "./ReferenceCard/ReferenceCard";
import profileImage from "./images/12_aswasdas1.jpg"; // replace with your own image path
import PortfolioImage from "./images/portfolioImg.png"; // replace with your own image path
import MovieCritic from "./images/movieCrictic.png"; // replace with your own image path


const skillsData = {
    Frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 70 },
      { name: 'Javacript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Angular', level: 70 }
    ],
    Tools: [
      { name: 'Git', level: 90 },
      { name: 'Office', level: 90 },
      { name: 'Windows', level: 70 },
      { name: 'AWS', level: 50 },
      { name: 'MongoDB', level: 90 }
    ],
    Backend: [
      { name: 'NodeJS', level: 70 },
      { name: 'NestJS', level: 90 },
      { name: 'ExpressJS', level: 80 },
      { name: 'NoSQL', level: 90 },
      { name: 'MySQL', level: 50 }
    ]
  };

  const experienceData = [
    {
        title: "Software Developer",
        company: "Appmocx Private Limited",
        date: "2022 - 2024"
      },
    {
      title: "Junior Software Developer",
      company: "Appmocx Private Limited",
      date: "2020 - 2022"
    }
   
  ];

  const languages = [
    { name: "Tamil", level: "Fluent", icon: "🇮🇳" },
    { name: "English", level: "Good level", icon: "🇬🇧" },
    { name: "German", level: "Intermediate", icon: "🇩🇪" }
  ];

  const interests = [
    { name: "Sport", description: "2 years Volley Ball", icon: "🏐" },
    { name: "Sport", description: "3 years Basket Ball", icon: "🏐" },
    { name: "Trips", description: "UAE , Inter States", icon: "✈️" },
    { name: "Board games", description: "Carrom Board", icon: "🎲" }
  ];

  const educationData = [
    {
      title: "Bachelor of Engineering",
      subtitle: "Computer Science Engineering",
      institution: "S.N.S College of Technology",
      date: "2016 - 2020"
    },
    {
      title: "Higher Secondary School",
      subtitle: "Computer Science",
      institution: "G.R.G Higher Secondary School",
      date: "2014 - 2016"
    },
    {
      title: "Matriculation",
      subtitle: "Science",
      institution: "Saratha Matriculation School",
      date: "2013 - 2014"
    }
  ];

  const projects = [

    {
      id:1,
      image: PortfolioImage,
      title: "Portfolio",
      technologies: "HTML,CSS,Javascript,React",
      sourceLink: "#",
      detailLink: "Information about my experience,skills and projects"
    },
    {
      id:2,
      image: MovieCritic,
      title: "Movie Review",
      technologies: "HTML,CSS,Javascript,React,NestJs,PostgreSql",
      sourceLink: "#",
      detailLink: "You can able to perform CRUD opration to movie and reviews.It is conencted to backend.Average Rating is calculated based on review rating for specific movie"
    }
  
  ];

  const references = [
    {
      image: profileImage,
      name: "Yahiatene Mohamed",
      title: "DevOps Engineer",
      company: "AG2R LA MONDIALE",
      text: "I worked for two years with Zinedine at the University of Lille. Zinedine is a very good working partner with high knowledge in backend and frontend development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    },
    {
      image: profileImage,
      name: "Jane Doe",
      title: "Software Engineer",
      company: "Tech Solutions",
      text: "Jane is a highly skilled engineer who brings enthusiasm and innovative solutions to every project. Her dedication to continuous improvement and her collaborative nature make her an asset to any team.",
    },
    {
      image: profileImage,
      name: "John Smith",
      title: "Project Manager",
      company: "Innovatech",
      text: "John has an exceptional talent for project management, seamlessly coordinating teams and ensuring projects are delivered on time. His leadership skills and technical knowledge make him an invaluable team member.",
    },
  ];



const HomePage = () => {

   const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 10000); // Auto-slide every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + references.length) % references.length
      );
      setIsTransitioning(false);
    }, 500);
  };
  const content = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
const portfolio = useRef(null);
  const contact = useRef(null);


  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleToggleDetails = (id) => {
    // Toggle the selected project ID or set it to null if it's the same one
    setSelectedProjectId(selectedProjectId === id ? null : id);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#content" onClick={(e) => { e.preventDefault(); scrollToSection(content); }}>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#about"onClick={(e) => { e.preventDefault(); scrollToSection(about); }}>
              <FontAwesomeIcon icon={faUser} /> About
            </a>
          </li>
          <li>
            <a href="#skills"onClick={(e) => { e.preventDefault(); scrollToSection(skills); }}>
              <FontAwesomeIcon icon={faTools} /> Skills
            </a>
          </li>
        
          <li>
            <a href="#portfolio"onClick={(e) => { e.preventDefault(); scrollToSection(portfolio); }}>
              <FontAwesomeIcon icon={faBriefcase} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact"onClick={(e) => { e.preventDefault(); scrollToSection(contact); }}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </a>
          </li>
        </ul>
       
      </nav>
      </header>

      {/* Hero Section */}
      <main className="content">
        <div  ref={content} className="hero-section">
      
          <div className="hero-text">

            <h1>Vishnu Venkat</h1>
            <p>I am a Software Developer </p>
          </div>
          <div className="hero-image">
            { <img src={avatar} alt="abstract network graphic" />}
          </div>
        </div>
      </main>


       {/* About */}

    <div ref={about} className="cv-section">
      <h2>About</h2>
      <div className="cv-container">
        {/* Education Section */}
        <div className="cv-column">
          <h3>Education</h3>
          <div className="timeline">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                  <p>{item.institution}</p>
                  <span className="timeline-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="cv-column">
          <h3>Experiences</h3>
          <div className="timeline">
            {experienceData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.company}</p>
                  <span className="timeline-date">{item.date}</span>
                  {/* <button className="detail-button">+ Detail</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages and Interests Section */}
        <div className="cv-column cv-right-column">
          <h3>Languages</h3>
          <ul className="languages-list">
            {languages.map((lang, index) => (
              <li key={index}>
                <span>{lang.icon}</span> {lang.name} - {lang.level}
              </li>
            ))}
          </ul>
          
          <h3>Center of interest</h3>
          <ul className="interests-list">
            {interests.map((interest, index) => (
              <li key={index}>
                <span>{interest.icon}</span> {interest.name} - {interest.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
       


 {/* Skills Section */}

    <div ref={skills} className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.keys(skillsData).map((category) => (
          <div key={category} className="skills-column">
            <h3>{category}</h3>
            {skillsData[category].map((skill, index) => (
              <div key={index} className="skill">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>




{/* Projects */}

    <div ref={portfolio}  className="portfolio">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard
          key={project.id}
          image={project.image}
          sourceLink={project.sourceLink}
          title={project.title}
          technologies={project.technologies}
          detailLink={project.detailLink}
          isExpanded={selectedProjectId === project.id}
          onToggle={() => handleToggleDetails(project.id)} 
           
          />
        ))}
      </div>
    </div>


{/* References */}

    {/* <div ref={references} className="references"> */}
      {/* <h2>References</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {references.map((ref, index) => (
            <div className="reference-card-wrapper" key={index}>
              <ReferenceCard
                image={ref.image}
                name={ref.name}
                title={ref.title}
                company={ref.company}
                text={ref.text}
              />
            </div>
          ))}
        </div> */}

        {/* Navigation Buttons */}
        {/* <div className="carousel-nav">
          <button className="nav-button" onClick={goToPrevious}>&#8249;</button>
          <button className="nav-button" onClick={goToNext}>&#8250;</button>
        </div>
      </div>
    </div> */}

{/* Contact Form */}

    <div ref={contact} className="contact-form-container">
      <h2>Contact Me</h2>
      <div className="contact-form-content">
        <div className="contact-form-sidebar">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.72-7.055c-.008-1.072-.876-1.934-1.953-1.934h-19.534c-1.077 0-1.946.863-1.953 1.935l11.72 7.054zm.352 2.287l-12.352-7.436v10.436c0 1.074.874 1.937 1.953 1.937h19.534c1.08 0 1.953-.867 1.953-1.937v-10.435l-12.352 7.435c-.318.193-.682.193-1 0z" />
            </svg>
          </div>
          <p>Do not hesitate to contact me</p>
        </div>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your Name" />
          
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          
          
          
          <label>Message</label>
          <textarea placeholder="Enter your message" rows="5"></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>



      {/* Footer */}
      <footer className="footer">
        <p>Copyright © By Vishnu Venkat.</p>
      </footer>
    </div>
  );
};

export default HomePage;
