import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, makeStyles } from '@material-ui/core';
import Footer from './Footer';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
    } else if (username.trim() === '') {
      setErrorMessage('Username is required');
    } else if (!validatePassword(password)) {
      setErrorMessage('Invalid password. It should be at least 8 characters and contain a digit and a special character.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      const userDetails = {
        email,
        username,
        password,
      };
      console.log('User Details:', userDetails);
      alert('Registration successful!');
      navigate('/');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Nova Banking</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Link to="/" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>Login</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          Registration Page
        </Typography>
        <TextField
          label="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        {errorMessage && (
          <Typography variant="body2" color="error" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
      </Paper>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    maxWidth: 400,
    margin: 'auto',
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#333',
  },
  errorMessage: {
    marginTop: theme.spacing(2),
    color: '#f44336',
  },
}));

export default Register;
