import React, {  useState } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardContent from '@mui/material/CardContent';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import './AddToCart.css'
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

function AddToCart(props) {
  const el = props.cartItem
  const setIsDeleted = props.deleted
  const userId = localStorage.userId
  const [quantity, setQuantity] = useState(1)
  const [qualityButtonClass, setqualityButtonClass] = useState('')
  const [qualityPlusButtonClass, setQualityPlusButtonClass] = useState('')
  const [inputData, setinputData] = useState({})
  const handleQualityMinus = ()=>{
    if(quantity>1){
    setQuantity(quantity-1)
    }  
    else {
    setqualityButtonClass('disabled')  
    }
  }
  const handleQualityPlus = (e,stock)=>{
    if(stock>quantity){
      setQuantity(quantity+1)
      setqualityButtonClass('')
    }
    else{
      setQualityPlusButtonClass('disabled')
    }
  }
  const handleClick = async(e,el)=> {
    console.log(el._id);
    try{
      const response = await axios.delete(`http://localhost:2000/deleteCart/${el._id}`)
      console.log(response);
      setIsDeleted(true)
    }
    catch(err){
      console.log(err);
    }
  }
  const handleSingleClick = (e,el)=>{
    setinputData({'id':el._id,'Price':el.Price,'Quantity':quantity,'userId':userId})
  }
  const handleOrder = async(e,el)=>{
    // e.preventDefault()
  console.log(inputData);
    try{
      const config ={
        headers: {
          'content-type':'application/json'
        }
      }
      const response = await axios.post('http://localhost:2000/addOrder',inputData,config)
      console.log(response);
      if(response.status=== 200){
        handleClick(e,el)
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
      <Grid item xs={6}>
      <Item sx={{height:358 , mb:3}} >
      <Typography gutterBottom variant="h4" component="h2">
          {el.Title}
      </Typography>
      <Typography variant="h6" >
         by {el.Author}
      </Typography>
      <Typography sx={{ mt:1 }}>
        {el.Genre}
      </Typography>
      <Typography sx={{ mt:1 }}>
        {el.Language}
      </Typography>
      <Typography sx={{ mt:2 }}>
        <CurrencyRupeeIcon className='rupeeIcon'/>{el.Price}
      </Typography>
      <Typography className='warning' sx={{ mt:2 }}>
          {el.Stock===0 ? `Stock not available` : el.Stock<10 ? `Only ${el.Stock} left`: '' }
      </Typography>
      </Item>
      </Grid>
      <Grid item xs={6}>
        <Item sx={{height:358 , mb:3}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      PRICE DETAILS
      </Typography>
      <Divider variant="middle" />

      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
        <Typography sx={{ mt: 1.5 ,mb:1.5 }}  component="div">
        Price ({quantity} item)
      </Typography>
      <Typography sx={{ mt: 1.5,mb:1.5 }} >
        {el.Price}
      </Typography>
      </Stack>

      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
      <Typography sx={{ mt: 1.5 ,mb:1.5 }}  component="div">
        Discount
      </Typography>
      <Typography sx={{ mt: 1.5,mb:1.5 }}>
        Not Available
      </Typography>
      </Stack>
      
      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
      <Typography sx={{ mt: 1.5 ,mb:1.5 }} component="div">
      Delivery Charges
      </Typography>
      <Typography sx={{ mt: 1.5,mb:1.5 }} >
        Free
      </Typography>
      </Stack>
      <Divider variant="middle" />

      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
      <Typography sx={{ mt: 1.5 ,mb:1.5 }} variant='h6'  component="div">
        Total Amount
      </Typography>
      <Typography sx={{ mt: 1.5,mb:1.5 }} >
        <CurrencyRupeeIcon className='rupeeIcon'/>{quantity*el.Price}
      </Typography>
      </Stack>
      <Button className={{qualityButtonClass}}onClick={handleQualityMinus}><RemoveCircleOutlineOutlinedIcon/></Button>{quantity}<Button className={qualityPlusButtonClass} onClick={(e)=>{handleQualityPlus(e,el.Stock)}}><AddCircleOutlineOutlinedIcon/></Button>
    </CardContent>
    <CardActions>
    <Button size="small" onDoubleClick={(e)=>{handleOrder(e,el)}} onClick={(e)=>{handleSingleClick(e,el)}} >Order Now</Button>
    <Button onClick={(e)=>{handleClick(e,el)}} sx={{mx:2}} size="small" >Remove From Cart</Button>
    </CardActions>
        </Item>
        
      </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default AddToCart