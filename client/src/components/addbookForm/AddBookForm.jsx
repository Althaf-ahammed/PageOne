import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VerticalNav from '../NavBar/VerticalNav';

function AddBookForm(props) {
    console.log(props.create);
    const navigate = useNavigate()
    const [file, setfile] = useState(null)
    const [Title, setTitle] = useState(null)
    const [Author, setAuthor] = useState(null)
    const [PublishedIn, setPublishedIn] = useState(null)
    const [Genre, setGenre] = useState(null)
    const [Language, setLanguage] = useState(null)
    const [Price, setPrice] = useState(null)
    const [Stock, setStock] = useState(null)
    const [Category, setCategory] = useState(null)

    const handleClick = async(e)=>{
        e.preventDefault()
        try{
            const formData = new FormData()
            formData.append('file',file)
            formData.append('Title',Title)
            formData.append('Author',Author)
            formData.append('PublishedIn',PublishedIn)
            formData.append('Genre',Genre)
            formData.append('Language',Language)
            formData.append('Price',Price)
            formData.append('Stock',Stock)
            formData.append('Category',Category)
            const data = await axios.post('http://localhost:2000/addbooks',formData)
            if(data.data === 'book added'){
                navigate('/booktable')
            }
        }
        catch(error){
            console.log(error);
        }
    }
    const handleImageChange = (e)=>{
      setfile( e.target.files[0] )
    }
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
          id="title"
          name="Title"
          label="Title"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          onChange={e =>{setTitle(e.target.value)}}
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
          variant="standard"
          onChange={e =>{setAuthor(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="published in"
          name="PublishedIn"
          label="Published In"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
          onChange={e =>{setPublishedIn(e.target.value)}}
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
          variant="standard"
          onChange={e =>{setGenre(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="language"
          name="Language"
          label="Language"
          fullWidth
          variant="standard"
          onChange={e=>{setLanguage(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="category"
          name="Category"
          label="Category"
          fullWidth
          variant="standard"
          onChange={e=>{setCategory(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="price"
          name="Price"
          label="Price"
          fullWidth
          variant="standard"
          onChange={e=>{setPrice(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="stock"
          name="Stock"
          label="Stock"
          fullWidth
          variant="standard"
          onChange={e=>{setStock(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
                <label for="imgUpload" class="form-label">Image</label>
                <input type="file" class="form-control" id="imageUpload" name="file" onChange={handleImageChange}/>
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

export default AddBookForm