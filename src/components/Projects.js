import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <Container>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Projects
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Chat System with Content Filtering</strong><br />
              Java, Android Studio, React.js, Node.js, VS-Code, Firebase<br />
              Nov 2023 - May 2024<br />
              Architected and executed sophisticated APIs for explicit content detection, achieving a 95% reduction in explicit content.
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>ConvoSphere</strong><br />
              React.js, Node.js, ChatEngine.io<br />
              Jan 2024 - Feb 2024<br />
              Developed a ChatGPT clone using React for the frontend, achieving a 25% increase in user engagement.
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Phish-Shield</strong><br />
              Python, AJAX, HTML, CSS, JS<br />
              June 2020 - Jan 2021<br />
              Engineered Phish-Shield, a URL validation tool, achieving a 92% accuracy in distinguishing fraudulent phishing websites.
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Projects;
