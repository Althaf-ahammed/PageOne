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
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


function Employee() {
    const [employee, setemployee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:2000/getEmployee')
            setemployee(response.data)
        }
        fetchData()
    }, [])
    const handleClick = ()=>{
        navigate('/addEmployeeForm')
    }
    console.log(employee);
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
      Add Employee
      </Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Department</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Address}</TableCell>
              <TableCell align="center">{row.Gender}</TableCell>
              <TableCell align="center">{row.Position}</TableCell>
              <TableCell align="center">{row.Department}</TableCell>
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

export default Employee