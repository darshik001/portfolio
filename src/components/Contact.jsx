import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_g7o5yce', 
      'template_uhyx03c', 
      form.current, 
      'zJbG0izTN0WzYDNL8'
    )
    .then((result) => {
      setAlertVariant('success');
      setAlertMessage('Message sent successfully! I\'ll get back to you soon.');
      setShowAlert(true);
      e.target.reset();
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }, (error) => {
      setAlertVariant('danger');
      setAlertMessage('Failed to send message. Please try again later.');
      setShowAlert(true);
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="section-subtitle text-center">Let's work together</p>
        </motion.div>

        <Row className="g-4 mt-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h3>Let's Connect</h3>
              <p>Feel free to reach out for collaborations or just a friendly hello!</p>

              <div className="contact-details">
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="contact-social">
                <motion.a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="contact-form-wrapper"
            >
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-4">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="user_name" 
                    placeholder="Enter your name" 
                    required 
                    className="form-control-custom"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="user_email" 
                    placeholder="Enter your email" 
                    required 
                    className="form-control-custom"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    rows={5} 
                    placeholder="Your message here..." 
                    required 
                    className="form-control-custom"
                  />
                </Form.Group>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>

                {showAlert && (
                  <Alert variant={alertVariant} className="mt-3">
                    {alertMessage}
                  </Alert>
                )}
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;