import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Education() {
  return (
    <Container>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Education
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Sinhgad College of Engineering</strong><br />
              Bachelor of Engineering in Information Technology<br />
              Pune, June 2024<br />
              CGPA: 8.4
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>K.K.Wagh Polytechnic</strong><br />
              Diploma in Computer Technology<br />
              Nashik, August 2021<br />
              Percentage: 94.63%
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Horizon Academy</strong><br />
              ICSE BOARD<br />
              Nashik, May 2018<br />
              Percentage: 87.47%
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Education;
