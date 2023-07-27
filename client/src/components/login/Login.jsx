import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const client = props.client
  const navigate = useNavigate()
  const [inputData, setInputData] = useState(client==='admin'?{'adminCheck':true}:{'adminCheck':false})
  const [response, setresponse] = useState('')
  const [ErrorDisplay, setErrorDisplay] = useState('disappear')
  const handleChange = (e)=>{
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setInputData({...inputData,[name]:value})
  }
  const handleClick = async(e)=>{
    e.preventDefault()
    try{
      const config = {
        headers:{
          "content-type":"application/json"
        },
      }
      const data = await axios.post('http://localhost:2000/login',inputData,config)
      console.log(data);
      if(data.data.response === 'login successfull'){
        if(client==='user'){
          localStorage.setItem('userId',data.data.userId)
          navigate('/')
        }else{
          localStorage.setItem('adminId',data.data.userId)
          navigate('/booktable')
        }
      }
      else{
        setresponse(data.data.response)
        setErrorDisplay('appear')
      }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {client==='admin'?'Admin Sign in':'Sign in'}
          </Typography>
          <h5 className={ErrorDisplay}><ErrorOutlineIcon/>{response}</h5>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login