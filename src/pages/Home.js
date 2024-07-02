import React from 'react';
import { Container, Typography, Box, Paper, Avatar } from '@mui/material';
import myPicture from '../assets/myPicture.jpg';  // Ensure this path is correct and the image is placed in src/assets

function Home() {
  return (
    <Container>
      <Box my={4}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          <Avatar alt="Viraj Sonawane" src={myPicture} sx={{ width: 150, height: 150, margin: '0 auto' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Viraj Sonawane
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            MERN Stack Developer
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home;
