import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <Container>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Experience
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>Front-End Intern</strong><br />
              CasCode, Pune<br />
              Feb 2023 – May 2023<br />
              Designed, developed, and maintained over 10 responsive and user-friendly websites using HTML, CSS, JavaScript, ReactJS.
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" paragraph>
              <strong>IT and Web Developer Intern</strong><br />
              AnsrOne, Pune<br />
              Aug 2022 – Oct 2022<br />
              Successfully designed, developed, and launched three high-impact web projects, demonstrating advanced proficiency in HTML, CSS, JavaScript.
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Experience;

