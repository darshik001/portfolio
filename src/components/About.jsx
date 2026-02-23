import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { personalInfo, education } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <p className="section-subtitle text-center">Get to know me better</p>
        </motion.div>

        <Row className="g-4 mt-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-card"
            >
              <div className="about-card-header">
                <FaUserTie className="about-icon" />
                <h3>Who am I?</h3>
              </div>
              <p className="about-text">{personalInfo.bio}</p>
              <p className="about-text mt-3">
                I'm currently pursuing my BCA degree while actively working on web development projects. 
                My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="about-card"
            >
              <div className="about-card-header">
                <FaGraduationCap className="about-icon" />
                <h3>Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                  <p className="description">{edu.description}</p>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="contact-info-cards mt-4"
        >
          <Row>
            <Col md={4}>
              <div className="info-card">
                <span>📧</span>
                <h4>Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card">
                <span>📱</span>
                <h4>Phone</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card">
                <span>📍</span>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;