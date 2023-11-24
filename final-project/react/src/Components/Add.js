import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const AddBeneficiary = () => {
  const classes = useStyles();
  const [accountIDBeneficiary, setAccountIDBeneficiary] = useState('');
  const [name, setName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const accountIDUser = sessionStorage.getItem('accID');

  const handleAddBeneficiary = async () => {
    try {
      const apiUrl = 'http://localhost:8080/v1/add';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountIDUser,
          accountIDBeneficiary,
          name,
          ifscCode,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Beneficiary added successfully!');
        setErrorMessage('');
        setAccountIDBeneficiary('');
        setName('');
        setIfscCode('');
      } else {
        const errorData = await response.json();
        setSuccessMessage('');
        setErrorMessage(`Failed to add beneficiary. Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error during beneficiary addition:', error);
      setSuccessMessage('');
      setErrorMessage('An error occurred. Please try again.');
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
          label="Beneficiary Account ID"
          value={accountIDBeneficiary}
          onChange={(e) => setAccountIDBeneficiary(e.target.value)}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          label="Beneficiary Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          label="IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          fullWidth
          style={{ marginBottom: 20 }}
        />
        {errorMessage && (
          <Typography variant="body2" color="error" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography variant="body2" className={classes.successMessage}>
            {successMessage}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleAddBeneficiary}>
          Add Beneficiary
        </Button>
      </Paper>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
    position: 'relative',
  },
  hero: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: theme.spacing(8),
    textAlign: 'center',
  },
  heroTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: theme.spacing(8),
    maxWidth: 400,
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#333',
  },
  errorMessage: {
    marginTop: theme.spacing(2),
    color: '#f44336',
  },
  successMessage: {
    marginTop: theme.spacing(2),
    color: '#4CAF50',
  },
}));

export default AddBeneficiary;
