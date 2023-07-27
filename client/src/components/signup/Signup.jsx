import React, { useState } from 'react'
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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './signup.css'


function Signup(props) {
  const client = props.client
  const navigate = useNavigate()
  const [inputData, setInputData] = useState(client==='admin'?{'adminCheck':true}:{'adminCheck':false})
  const [date, setDate] = useState(null)
  const [ErrorDisplay, setErrorDisplay] = useState('disappear')
  const [response, setresponse] = useState('')
  
  
  console.log(client);
    const handleSubmit = async(e)=>{
      e.preventDefault()
      try{
        const config = {
          headers:{
            'content-type':'application/json',
          },
        }
        const data = await axios.post('http://localhost:2000/signup',inputData,config)
        console.log(data);
        if(data.data.response){
          if( data.data.response === 'client added'){
            navigate('/login')
          }
        }
        else{
          setresponse(data.data)
          setErrorDisplay('appear')
        }
      }
      catch(error){
        console.log(error);
      }
    }
    const handleChange = (e)=>{
      let name = e.target.name
      let value = e.target.value
      setInputData({...inputData,[name]:value})
    }
    const handleDateChange = (newValue)=>{
      setDate(newValue)
        setInputData({...inputData,'DOB':newValue.toDateString()})
    }
    
    console.log( date);
    console.log(inputData);
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
            {client==='user'?'Sign up':'Admin Sign up'}
          </Typography>
          <h5 className={ErrorDisplay}><ErrorOutlineIcon/>{response}</h5>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="Email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DateField']}>
        <DateField required
                  fullWidth
                  name="DOB"
                  value={date}
                  label="Date Of Birth"
                  id="date"
                  autoComplete="new-password" 
                  onChange={(newValue)=>handleDateChange(newValue)}
                  />
      </DemoContainer>
    </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Signup