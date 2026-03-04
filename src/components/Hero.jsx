import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';




const Hero = () => {
  return (
    <section id="home" className="hero-section">
     <ParticleBackground/>
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-subtitle mb-3 d-inline-block">Welcome to my portfolio</span>
              
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="hero-role">{personalInfo.title}</h2>
              <p className="hero-description">{personalInfo.bio}</p>

              <div className="hero-stats d-flex justify-content-center gap-4 mb-4">
                <motion.div 
                  className="stat-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Learning</span>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </motion.div>
              </div>

              <div className="hero-social d-flex justify-content-center gap-3 mb-4">
                <motion.a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <a href='https://drive.google.com/file/d/1ve2tN7NS3pplYxGQPYrXlb3B3bfhORDK/view?usp=drive_link'target='_blank' variant="primary" size="lg" className="hero-btn btn me-3 mb-3 mb-sm-0">
                  <FaDownload className="me-2" /> Download Resume
                </a>
                <Button variant="outline-primary" size="lg" className="hero-btn-outline mb-3 mb-sm-0" href="#contact">
                  Contact Me <FaArrowRight className="ms-2" />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowRight className="rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;