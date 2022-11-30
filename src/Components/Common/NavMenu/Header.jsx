import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideBar from './SideBar';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import {startLogout} from '../../../store/slices/auth/thunks'
import { Avatar, Button } from '@mui/material';
import AccountModal from '../../Auth/Account/AccountModal';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Header = () => {
const theme = useTheme();
const [open, setOpen] = React.useState(false);
const {status,displayName,photoURL} = useSelector(store => store.auth)
const [anchorEl, setAnchorEl] = React.useState(null);
const dispatch = useDispatch();
const name= displayName?.charAt(0);
const [openAccountModal,setOpenAccountModal]=React.useState(false);


  
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount =() =>{

    setOpenAccountModal(true);
    handleClose();

  }

  const handleLogout = () =>{
    
    // logout();
    // navigate('/login')
    console.log("LogOut")
    // window.location.reload();


    dispatch( startLogout())


  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            Rtickets
          </Typography>
          
          

            <div>
              {status ==='authenticated' ?
              <>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openMenu}
                color="inherit"
                startIcon={ 
                  photoURL
                  ? 
                  <Avatar alt="Remy Sharp" src={photoURL} sx={{ width: 30, height: 30 }}/>
                  :
                  <Avatar sx={{ width: 30, height: 30, }}>{name}</Avatar>
                }
                
              >
                {displayName ? displayName : 'User' }

              </Button>
              
              
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    
                  >
            
                    <MenuItem onClick={()=>handleAccount()} style={{ textDecoration: 'none' , color: 'black'}}><AccountBoxIcon/> Mi Cuenta</MenuItem>
                    <MenuItem onClick={handleLogout} style={{ textDecoration: 'none' , color: 'black'}} ><LogoutIcon/> Logout</MenuItem>
                    
                  </Menu>
              </>     
                 :null}

            </div>

            

       
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       <SideBar open={open}/>
       <DrawerHeader />
      </Drawer>

          <AccountModal
          open={openAccountModal} 
          onClose={()=> setOpenAccountModal()} 
          />
      
      </div>
    );
  };
  export default Header;
  