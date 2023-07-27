import React from 'react'
import VerticalTabs from '../../components/NavBar/VerticalNav'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


function Home() {
  return (
    <div>
      <VerticalTabs/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box>
      
    </div>
  )
}

export default Home