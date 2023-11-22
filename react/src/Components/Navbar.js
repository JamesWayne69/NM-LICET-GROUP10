import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Nova Banking</Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/home" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>About</Link>
          <Link to="/help" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>Help</Link>
          <Link to="/signout" style={{ color: 'white', textDecoration: 'none' }}>Sign Out</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

