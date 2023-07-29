import React from 'react'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { GiBookshelf } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import SearchPanel from '../search/SearchPanel';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from '../../Assets/logo/vector/default-monochrome.svg'
import logoWhite from '../../Assets/logo/vector/default-monochrome-white.svg'
import './navbar.css'

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

 function UserVerticalNav(props) {

  const {cartCount,open,setOpen} = props
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);

  }

  const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const drawerWidth = 200;
    function logout() {
      localStorage.clear();
      navigate('/login')
    }
  return (
    <div>

      <CssBaseline />
      <AppBar id='userAppBar' position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {open? null : <Link to={'/'}><img className='pageOneLogo' src={logo} alt='PageOne' center></img></Link>}
          </Typography>
          <SearchPanel/>
          {userId ? <AccountCircleIcon sx={{mx:2,color:'#f66b3f'}}/> :<Link className='signupButton' to={'/login'}><Button sx={{mx:2,color:'#f66b3f'}}  >Login</Button></Link>}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#FF5733',
            color:'white'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link to={'/'}><img className='pageOneLogoDrawer' src={logoWhite} alt='PageOne'></img></Link>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'white'}} /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List>
              <ListItem disablePadding>
                <Link className='verticalNavButton' to={'/'}>
                <ListItemButton >
                  <ListItemIcon>
                    <GiBookshelf className='bookShelfIcon'/>
                  </ListItemIcon>
                  <ListItemText primary={'Books'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
        <Divider />
        <List>
              <ListItem disablePadding>
                <Link className='verticalNavButton' to={`/addCart/${userId}`}>
                <ListItemButton >
                  <ListItemIcon>
                    <ShoppingCartIcon sx={{color:'white'}}/><sup className='cartCount' >{cartCount}</sup>
                  </ListItemIcon>
                  <ListItemText primary={'Cart'} />
                </ListItemButton></Link>
              </ListItem>
          </List>
        <Divider />
        {userId ? 
        <List>
              <ListItem disablePadding>
                <ListItemButton onClick={logout} >
                  <ListItemIcon>
                    <LogoutIcon sx={{color:'white'}}/>
                  </ListItemIcon>
                  <ListItemText primary={'Log Out'} />
                </ListItemButton>
              </ListItem>
          </List>:
          null}
      </Drawer>

    </div>
  )
}
export default UserVerticalNav

