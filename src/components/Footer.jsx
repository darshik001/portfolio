import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Darshik Shekhada. All rights reserved.</p>
          <p className="mt-2">Designed by Darshik</p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;