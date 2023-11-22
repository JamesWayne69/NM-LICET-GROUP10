import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from './AuthContext'; 

const TransactionLog = () => {
  const { user } = useAuth(); 
  const [transactions, setTransactions] = useState([]);

  const fetchUserTransactions = async () => {
    try {
      const response = await fetch(`/api/data/${user.username}`); 
      const data = await response.json();
      setTransactions(data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchUserTransactions();
  }, [user]);

  return (
    <div>
      <Navbar />
      <h2>Transaction Log</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>From Account</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.fromAccount}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
};

export default TransactionLog;
