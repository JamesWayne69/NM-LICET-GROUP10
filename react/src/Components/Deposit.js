// Deposit.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/');
  }
  const classes = useStyles();
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentBalance, setCurrentBalance] = useState(1000); 

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      setErrorMessage('Please enter a valid positive amount');
    } else {
      const newBalance = currentBalance + depositAmount;
      setCurrentBalance(newBalance);

      setAmount('');
      setErrorMessage('');

      alert(`Deposit of $${depositAmount} successful!\nNew Balance: $${newBalance.toFixed(2)}`);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
       <Navbar />
      <Paper elevation={3} className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          Deposit Page
        </Typography>
        <Typography variant="subtitle1" className={classes.balance}>
          Account Balance: ${currentBalance.toFixed(2)}
        </Typography>
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        {errorMessage && <Typography variant="body2" color="error" className={classes.errorMessage}>{errorMessage}</Typography>}
        <Button variant="contained" color="primary" onClick={handleDeposit}>
          Deposit
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
  balance: {
    marginBottom: theme.spacing(3),
    color: '#4CAF50', 
    fontWeight: 'bold',
  },
  errorMessage: {
    marginTop: theme.spacing(2),
    color: '#f44336', 
  },
}));

export default Deposit;
