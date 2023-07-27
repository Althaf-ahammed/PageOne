import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import VerticalNav from '../NavBar/VerticalNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddEmployeeForm() {
    const [InputData, setInputData] = useState([])
    const navigate = useNavigate()
    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputData({...InputData,[name]:value})
    }
    const handleClick = async(e)=>{
        e.preventDefault()
        try{
            const config = {
                headers:{
                    'content-type':'application/json'
                }
            }
            const response = await axios.post('http://localhost:2000/addEmployee',InputData,config)
        if(response.data ==='employee added'){
            navigate('/employee')
        }
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(InputData);
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
      <VerticalNav/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Add Books
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <TextField
          required
          id="name"
          name="Name"
          label="Name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7} >
        <TextField
          required
          id="address"
          name="Address"
          label="Address"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="Position"
          name="Position"
          label="Position"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          required
          id="department"
          name="Department"
          label="Department"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="Gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" onClick={handleChange} />
        <FormControlLabel value="male" control={<Radio />} label="Male" onClick={handleChange} />
        <FormControlLabel value="other" control={<Radio />} label="Other" onClick={handleChange} />
      </RadioGroup>
    </FormControl>
    </Grid>
    </Grid>
    <Button 
        variant="contained"
        sx={{ mt: 3, ml: '50%' }}
        onClick={handleClick}
        >
        Add
        </Button>
  </React.Fragment>
        </Box>
        </Box>
    </div>
  )
}

export default AddEmployeeForm