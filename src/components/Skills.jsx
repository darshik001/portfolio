import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { skills, interests } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: <FaCode />, items: skills.frontend, color: '#6366f1' },
    { title: 'Backend', icon: <FaServer />, items: skills.backend, color: '#10b981' },
    { title: 'Database', icon: <FaDatabase />, items: skills.database, color: '#f59e0b' },
    { title: 'Tools', icon: <FaTools />, items: skills.tools, color: '#ef4444' }
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Technical Skills</h2>
          <p className="section-subtitle text-center">Technologies I work with</p>
        </motion.div>

        <Row className="g-4 mt-4">
          {skillCategories.map((category, index) => (
            <Col key={index} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="skill-card"
                style={{ borderTop: `4px solid ${category.color}` }}
              >
                <div className="skill-icon-wrapper" style={{ background: `${category.color}20`, color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                      style={{ background: `${category.color}10`, color: category.color }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="interests-section mt-5"
        >
          <h3 className="text-center mb-4">Interests & Hobbies</h3>
          <div className="interests-cloud">
            {interests.map((interest, index) => (
              <motion.span
                key={index}
                className="interest-item"
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  animation: `float ${3 + index * 0.5}s infinite ease-in-out`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;