import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLinkedin } from 'react-icons/fa';
import { personalInfo, projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">My Projects</h2>
          <p className="section-subtitle text-center">Some of my recent work</p>
        </motion.div>

        <Row className="g-4 mt-4">
          {projects.map((project, index) => (
            <Col key={index} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-overlay">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              show={true}
              onHide={() => setSelectedProject(null)}
              size="lg"
              centered
              className="project-modal"
            >
              <Modal.Header>
                <Modal.Title>{selectedProject.name}</Modal.Title>
                <button className="close-btn" onClick={() => setSelectedProject(null)}>
                  <FaTimes />
                </button>
              </Modal.Header>
              <Modal.Body>
                <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <FaGithub /> View Code
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-link primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </Modal.Footer>
            </Modal>
          )}

        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Projects;