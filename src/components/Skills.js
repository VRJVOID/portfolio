import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <Container>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Skills
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Languages:</strong> Java, SQL (MySQL), JavaScript, HTML/CSS
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Frameworks:</strong> React.JS, Node.JS, Bootstrap, Rapid API
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Developer Tools:</strong> Git, Google Cloud Platform, VS Code, Visual Studio, IntelliJ, Android Studio
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Skills;
