import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import VerticalNav from '../../components/NavBar/VerticalNav';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function PurchaseBookPage() {
    const [books, setbooks] = useState([])

    useEffect(() => {
      async function fetchData(){
        const response = await axios.get('http://localhost:2000/getPurchaseBook')
        console.log(response.data);
        setbooks(response.data)
      }
      fetchData()
    }, [])
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Title}
              </TableCell>
              <TableCell align="right">{row.Stock}</TableCell>
              <TableCell align="right"><Button varient='outline'>Purchase</Button></TableCell>
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

export default PurchaseBookPage