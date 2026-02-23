import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Certifications</h2>
          <p className="section-subtitle text-center">My professional achievements</p>
        </motion.div>

        <Row className="g-4 mt-4">
          {certifications.map((cert, index) => (
            <Col key={index} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="cert-card"
              >
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className="cert-org">{cert.organization}</p>
                <span className="cert-year">{cert.year}</span>
                <div className="cert-shine"></div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;