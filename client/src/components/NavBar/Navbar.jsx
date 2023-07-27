import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" edge="start"
            sx={{ flexGrow: 1 }} >
            Books
          </Typography>
          <Link className='signupButton' to={'/signup'}><Button color="inherit" >Sign Up</Button></Link>
          <Link className='signupButton' to={'/login'}><Button color="inherit" >Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar