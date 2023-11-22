// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Paper, makeStyles, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const Login = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   // Use the useAuth hook
  const navigate = useNavigate();

  const { login } = useAuth();
  // useEffect(() => {
  //   console.log('isLoggedIn in useEffect of login', isLoggedIn);
  //   // Redirect if isLoggedIn becomes true
  //   if (isLoggedIn) {
  //     navigate('/home');
  //   }
  // }, [isLoggedIn, navigate]);

  const handleLogin = () => {
      
    const mockData = [
      { username: 'lav', password: 'lav123456' },
      { username: 'lava', password: 'lava123456' },
    ];

    const user = mockData.find((user) => user.username === username && user.password === password);

    if (user) {
      login();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Nova Banking</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Link to="/register" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>
              Register
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
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
        {errorMessage && (
          <Typography variant="body2" color="error" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
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

export default Login;
