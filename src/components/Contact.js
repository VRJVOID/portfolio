import React, { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData); // Replace with actual submission logic
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container>
      <Box my={4}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;
