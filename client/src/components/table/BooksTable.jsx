import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import VerticalNav from '../NavBar/VerticalNav';
import Toolbar from '@mui/material/Toolbar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function BooksTable() {
  const navigate = useNavigate()
    const [books, setbooks] = useState([])
    const [isDelete, setisDelete] = useState(false)
    const [clickedBook, setclickedBook] = useState({})
    const [open, setOpen] = useState(false);
    const adminId = localStorage.getItem('adminId')

  const handleClickOpen = (e,row) => {
    setclickedBook(row)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
      if(adminId){
        async function fetchData() {
          const response = await axios.get('http://localhost:2000/getbooks')
          setbooks(response.data) 
            }
            fetchData();
      }else{
        navigate('/login')
      }
        
    }, [isDelete])
    const handleClick = ()=>{
        navigate('/addbook')
    }
    const handleDelete = async(e,row)=>{
      console.log(row);
      e.preventDefault()
      try{
        const deleted = await axios.delete(`http://localhost:2000/deletebook/${row._id}`)
        isDelete ? setisDelete(false) : setisDelete(true)
        setOpen(false)
      }
      catch(error){
        console.log(error);
      }
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
      <Button variant="outlined" sx={{mb:5}} startIcon={<AddIcon/>} onClick={handleClick} >
      Add Books
      </Button>
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell align="center">Title</TableCell>
               <TableCell align="center">Author</TableCell>
               <TableCell align="center">Published In</TableCell>
               <TableCell align="center">Genre</TableCell>
               <TableCell align="center">Language</TableCell>
               <TableCell align="center">Category</TableCell>
               <TableCell align="center">Price</TableCell>
               <TableCell align="center">Stock</TableCell>
               <TableCell align="center"></TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {books.map((row) => (
              
              <TableRow
                 key={row._id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                <TableCell align="center"> {row.Title}</TableCell>
                 <TableCell align="center">{ row.Author}</TableCell>
                 <TableCell align="center">{ row.PublishedIn}</TableCell>
                 <TableCell align="center">{ row.Genre}</TableCell>
                 <TableCell align="center">{ row.Language}</TableCell>
                 <TableCell align="center">{ row.Category}</TableCell>
                  <TableCell align="center">{ row.Price}</TableCell>
                  <TableCell align="center">{ row.Stock}</TableCell>
                 <TableCell align="center">
                  
                  <React.Fragment>
                    <Link to={`/editBook/${row._id}`}>
                    <Button sx={{ mx:2 , mb:2}} variant="outlined"
                     ><EditIcon/></Button>
                    </Link>
                     <Button variant="outlined" onClick={(e)=>{handleClickOpen(e,row)}} ><DeleteIcon/></Button>
                      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation Alert"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete the book
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>{handleDelete(e,clickedBook)}} autoFocus>Delete</Button>
          <Button onClick={handleClose} >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
          </React.Fragment>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
      </Box>
      </Box>
    </div>
  )
}

export default BooksTable