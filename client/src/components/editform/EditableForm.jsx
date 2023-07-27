import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import VerticalNav from '../NavBar/VerticalNav';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditableForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState({Title:'' , Author:'' , PublishedIn:'',Genre:'',Language:'',Price:'',Stock:''})
    const [inputData, setinputData] = useState([])
    useEffect(() => {
        async function fetchData () {
            const response = await axios.get(`http://localhost:2000/getBookById/${id}`)
            setinputData(response.data)
            setBook(response.data)
            console.log(response.data);
        }
        fetchData()
    }, [id])

    
    const handleChange = (e)=>{
        const name = e.target.name
        const value  = e.target.value
        setBook({...book,[name]:value})
        setinputData({...inputData,[name]:value})
    }
    const handleClick = async(e)=>{
        e.preventDefault();
      try{
        const config = {
          headers : {
            'content-type':'application/json'
          }
        }
        const editedResponse = await axios.put('http://localhost:2000/editbook',inputData,config)
        console.log(editedResponse);
        navigate('/booktable')
      }
      catch(error){
        console.log(error);
      }
    }
    console.log(inputData);
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
      Edit Book
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
      <TextField
        required
        id="title"
        name="Title"
        label='Title'
        value={book.Title}
        fullWidth
        autoComplete="given-name"
        variant="filled"
        onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7} >
        <TextField
          required
          id="author"
          name="Author"
          label="Author"
          fullWidth
          autoComplete="shipping address-line1"
          variant="filled"
          value={book.Author}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="published in"
          name="PublishedIn"
          label="Published In"
          fullWidth
          autoComplete="shipping address-line2"
          variant="filled"
          value={book.PublishedIn}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          required
          id="genre"
          name="Genre"
          label="Genre"
          fullWidth
          autoComplete="shipping address-level2"
          variant="filled"
          value={book.Genre}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="language"
          name="Language"
          label="Language"
          fullWidth
          variant="filled"
          value={book.Language}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="category"
          name="Category"
          label="Category"
          fullWidth
          variant="filled"
          value={book.Category}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="price"
          name="Price"
          label="Price"
          fullWidth
          variant="filled"
          value={book.Price}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="stock"
          name="Stock"
          label="Stock"
          fullWidth
          variant="filled"
          value={book.Stock}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
    <Button 
        variant="contained"
        sx={{ mt: 3, ml: '50%' }}
        onClick={handleClick}
        >
            <DoneIcon/> Save
        </Button>
  </React.Fragment>
      </Box>
        </Box>
    </div>
    
  )
}

export default EditableForm