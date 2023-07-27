import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import AddToCart from '../addToCart/AddToCart'
import UserVerticalNav from '../../components/NavBar/UserVerticalNav';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Cart() {
  const navigate = useNavigate()
    const [book, setBook] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    const [open, setOpen] = useState(true);
    const id = localStorage.getItem('userId')
    useEffect(() => {

      if(id){
        async function fetchData (){
          const response = await axios.get(`http://localhost:2000/viewbook/${id}`)
          setBook(response.data)
          setIsDeleted(false)
        }
        fetchData()
      }else{
        navigate('/login')
      }

        
      }, [id,isDeleted])
  return (
    <div>
        <Box sx={{ display: 'flex',mx:2 }}>
      <UserVerticalNav cartCount = {book.length} open={open} setOpen={setOpen} />
      <Main open={open}>
        <DrawerHeader />

        {book.map((el)=>{
    return(
        <AddToCart cartItem={el} deleted={setIsDeleted} />
        )
      })
      }
          </Main>
    </Box>
    </div>
  )
}
export default Cart