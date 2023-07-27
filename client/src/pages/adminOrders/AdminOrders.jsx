import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import VerticalNav from '../../components/NavBar/VerticalNav';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


function AdminOrders() {
    const [orders, setorders] = useState([])
    const [deliveryInput, setdeliveryInput] = useState([])
    useEffect(() => {
        async function fetchData () {
            const response = await axios.get('http://localhost:2000/Allorders')
            console.log(response);
            setorders(response.data)
        }
      fetchData()
    }, [deliveryInput])
    console.log(orders);
    const handleDelivery = async(e,row)=>{
      // setdeliveryInput(row)
      console.log(deliveryInput);
      try{
        const config ={
          headers:{
            'content-type':'application/json'
          }
        }
        const response = await axios.put('http://localhost:2000/orderDelivery',row,config)
      setdeliveryInput(row)
        console.log(response);
      }catch(err){
        console.log(err);
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
                
                  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.bookTitle}
              </TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
              <TableCell align="center">{row.Quantity}</TableCell>
              <TableCell align="center">{row.TotalPrice}</TableCell>
              <TableCell align="center"><Button onClick={(e)=>{handleDelivery(e,row)}} variant='outlined'>Deliver</Button></TableCell>
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

export default AdminOrders