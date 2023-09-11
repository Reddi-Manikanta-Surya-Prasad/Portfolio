import AboutImage from '../../assets/about.jpg'
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

// Replace this with your Google Drive shareable link
const driveLink = 'https://drive.google.com/file/d/1PO0jjaeGuJ12l_Dtwx0o_dL_zsUfsBwj/view?usp=drive_link';

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            {/* Replace the image source with your about image */}
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion.
            Being in the web development industry for over a year, I'm always
            motivated to do more!
          </p>
          <p>
            Hi, my name is Reddi Manikanta Surya Prasad from Andhra Pradesh,
            India. I'm a full-stack web developer and also a DevOps Engineer
            with a Bachelors degree in Computer Science. My top priority is to
            get your business online the right way, giving you industry-standard
            design and all the functionality you need to operate smoothly
            online. Get in touch today with the details of your project let's get
            started! Check out my resume below!
          </p>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
