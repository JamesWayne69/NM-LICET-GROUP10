import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Add = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddBeneficiary = () => {
    if (beneficiaryName.trim() === '' || accountNumber.trim() === '') {
      setErrorMessage('Please fill in all the fields');
    } else {
      const addedBeneficiary = {
        beneficiaryName,
        accountNumber,
      };
      console.log('Added Beneficiary Details:', addedBeneficiary);

      setBeneficiaryName('');
      setAccountNumber('');
      setErrorMessage('');

      navigate('/home');
    }
  };

  return (
    <div>
      <Navbar />
      <Paper elevation={3} className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          Add Beneficiary
        </Typography>
        <TextField
          label="Beneficiary Name"
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        {errorMessage && <Typography variant="body2" color="error" className={classes.errorMessage}>{errorMessage}</Typography>}
        <Button variant="contained" color="primary" onClick={handleAddBeneficiary}>
          Add Beneficiary
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

export default Add;
