import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Container>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Hi, I'm Viraj Sonawane. Here are a few details about me:
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  I completed my graduation in Bachelor of Engineering from Sinhgad College of Engineering Pune. During my studies, I maintained a strong academic record, achieving a CGPA of 8.4.
                </li>
                <li>
                  I specialize in MERN (MongoDB, Express.js, React, Node.js) stack development. My projects typically involve creating robust web applications with a focus on scalability and performance.
                </li>
                <li>
                  I am passionate about leveraging technology to solve real-world problems. My projects often incorporate innovative solutions and utilize modern development practices.
                </li>
                <li>
                  Apart from web development, I have experience in machine learning and data science, particularly in the application of SVM (Support Vector Machine) algorithms for tasks like URL validation.
                </li>
                <li>
                  I enjoy staying updated with the latest trends in technology and continuously learning new skills to enhance my proficiency.
                </li>
                <li>
                  In addition to technical skills, I value teamwork and collaboration. I have participated in various group projects, gaining experience in agile methodologies and effective communication.
                </li>
                <li>
                  Outside of work and studies, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community through platforms like GitHub and Stack Overflow.
                </li>
              </ul>
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default About;
