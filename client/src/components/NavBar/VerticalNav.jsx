import React from 'react'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import { GiBookshelf } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

function VerticalNav() {
  const navigate = useNavigate()
    const drawerWidth = 200;
    function logout() {
      localStorage.clear();
      navigate('/login')
    }
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          Books
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
              <ListItem disablePadding>
                <Link className='verticalNavButton' to={'/booktable'}>
                <ListItemButton >
                  <ListItemIcon>
                    <GiBookshelf/>
                  </ListItemIcon>
                  <ListItemText sx={{color:'black'}} primary={'Books'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
        <Divider />
        <List>
              <ListItem disablePadding>
                <Link className='verticalNavButton' to={'/addbook'}>
                <ListItemButton >
                  <ListItemIcon>
                    <AddIcon/>
                  </ListItemIcon>
                  <ListItemText sx={{color:'black'}} primary={'Add Book'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
        <Divider />
        <List>
              <ListItem disablePadding>
              <Link className='verticalNavButton' to={'/orders'}>
                <ListItemButton  >
                  <ListItemIcon>
                    <WorkIcon/>
                  </ListItemIcon>
                  <ListItemText sx={{color:'black'}} primary={'Orders'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
          <Divider/>
          <Divider />
        <List>
              <ListItem disablePadding>
              <Link className='verticalNavButton' to={'/purchaseBook'}>
                <ListItemButton  >
                  <ListItemIcon>
                    <StoreIcon/>
                  </ListItemIcon>
                  <ListItemText sx={{color:'black'}} primary={'Purchase'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
          <Divider/>
      <List>
              <ListItem disablePadding>
                <ListItemButton onClick={logout} >
                  <ListItemIcon>
                    <LogoutIcon/>
                  </ListItemIcon>
                  <ListItemText sx={{color:'black'}} primary={'Log Out'} />
                </ListItemButton>
              </ListItem>
          </List>
      </Drawer>
      
    </div>
  )
}

export default VerticalNav