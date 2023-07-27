import React, { useEffect, useState } from 'react'
import UserVerticalNav from '../NavBar/UserVerticalNav'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios'
import './userBookView.css'
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Cover from '../cover/Cover';
import Footer from '../footer/Footer';
import { CardActionArea } from '@mui/material';
import ReactPaginate from 'react-paginate';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
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
  padding: theme.spacing(0, 0.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function UserBookView() {
  let { title } = useParams();
  const [count, setCount] = useState(0)
    const [books, setBooks] = useState([])
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(10);
    const [activeCategory, setactiveCategory] = useState('all')
    const [isSearch, setisSearch] = useState(false)
    const userId = localStorage.getItem('userId')
    
    useEffect(() => {
      if(title){
        async function fetchData (){
          const response = await axios.get(`http://localhost:2000/getbooks/${title}`)
          setBooks(response.data)
          setisSearch(true)
        }
        fetchData()
      }else{
        async function fetchData (){
          const response = await axios.get('http://localhost:2000/getbooks')
          setBooks(response.data)
          setisSearch(false)
        }
        fetchData()
      }
      async function fetchCount(){
        const response = await axios.get(`http://localhost:2000/cartCount/${userId}`)
      setCount(response.data)
      }
      fetchCount()
      
    }, [title,count,userId])
    const handleAddToCart = async(e,Id)=>{
      e.preventDefault()
      try{
        const config = {
          headers:{
            'content-type':'application/json'
          }
        }
        const cartInput = {userId:localStorage.getItem('userId'),bookId:Id}
        console.log(cartInput);
        const addToCart = await axios.post('http://localhost:2000/addCart',cartInput,config)
        console.log(addToCart);
        setCount(count+1)
      }
      catch(error){
        console.log(error);
      }
    }
    const handleClick = async(e,category)=>{
      const response = await axios.get(`http://localhost:2000/getbooks/${category}`)
          setBooks(response.data)
          setactiveCategory(category)
    }

    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
    const offset = currentPage * postsPerPage;

  return (
    <Box id="page-container" sx={{ display: 'flex',mx:1.5 }}>
      <UserVerticalNav cartCount = {count} open={open} setOpen={setOpen} />
        <Main  open={open}>
        <DrawerHeader />
        { !isSearch && <Cover/>}
        <Box sx={{mb:'300px'}}>
          <Box sx={{textAlign:'center',mt:6,mb:8}}>
          <Typography sx={{mb:2}} className='loraFont ShopOnlineSpan' gutterBottom variant="span" component="span">
            Shop Online             
          </Typography>
          <Typography className='loraFont' gutterBottom variant="h4" component="h4">
              Latest Books Online
          </Typography>
          </Box>
          {!isSearch && 
            <Box sx={{mx:'28%',mb:8}}>
            <Button onClick={(e)=>{handleClick(e,'all')}} id={activeCategory==='all'?'activeCategory':'coverButton'} sx={{border:'0.3px black solid',borderRadius:0,mx:2}} color="inherit" href='' >All</Button>
            <Button onClick={(e)=>{handleClick(e,'fiction')}} id={activeCategory==='fiction'?'activeCategory':'coverButton'} sx={{border:'0.3px black solid',borderRadius:0,mx:2}} color="inherit" href='' >Fiction</Button>
            <Button onClick={(e)=>{handleClick(e,'non-fiction')}} id={activeCategory==='non-fiction'?'activeCategory':'coverButton'} sx={{border:'0.3px black solid',borderRadius:0,mx:2}} color="inherit" href='' >Non-fiction</Button>
            <Button onClick={(e)=>{handleClick(e,"children's book")}} id={activeCategory==="children's book"?'activeCategory':'coverButton'} sx={{border:'0.3px black solid',borderRadius:0,mx:2}} color="inherit" href='' >Children's Book</Button>
            </Box>
          }
          
        <Grid container spacing={4}>
             {books
             .slice(offset, offset + postsPerPage)
             .map((book) => (
              <Grid item key={book} xs={12} sm={6} md={2.4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column',justifyContent:'space-between' }}
                >
                  <CardActionArea>
                  <CardMedia id='cardMedia'
                    sx={{ height: 350 }}
                    image={book.image}
                  />
                  <CardContent id='cardContent' sx={{ flexGrow: 1 }}>
                  <Typography sx={{color:'rgb(149, 141, 141)'}}>
                        {book.Author}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {book.Title}
                    </Typography>
                    <Typography sx={{ mt:2 }}>
                      <CurrencyRupeeIcon/>{book.Price}
                    </Typography>
                    <Typography className='warning' sx={{ mt:2 }}>
                        {book.Stock===0 ? `Stock not available` : book.Stock<10 ? `Only ${book.Stock} left`: '' }
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button className='AddToCartButton' onClick={(e)=>{handleAddToCart(e,book._id)}} size="small" >Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={Math.ceil(books.length / postsPerPage)}
            previousLabel={'Prev'}
            nextLabel={'Next'}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
          </Box>
          <Footer/>
          </Main>
      </Box>
  )
}

export default UserBookView