import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Card, CardContent, Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
 
  useEffect(() => {
    console.log('value of login variable at home',isLoggedIn)

    if (!isLoggedIn) {
      console.log('isLoggedIn in home',isLoggedIn)
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const cardStyle = {
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div>
      <Navbar />

      <Container>
        <h2 style={{ marginTop: 20 }}>Welcome to Nova Banking</h2>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="./transaction-log" style={cardStyle}>
              <CardContent>
                <Typography variant="h6">Number of Transactions</Typography>
                <Typography variant="h4">100</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="./add" style={cardStyle}>
              <CardContent>
                <Typography variant="h6">Add Beneficiary</Typography>
                <Typography variant="body2">Click here to add a new beneficiary</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="./withdraw" style={cardStyle}>
              <CardContent>
                <Typography variant="h6">Withdraw</Typography>
                <Typography variant="body2">Withdraw funds from your account</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="./deposit" style={cardStyle}>
              <CardContent>
                <Typography variant="h6">Deposit</Typography>
                <Typography variant="body2">Deposit funds into your account</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
