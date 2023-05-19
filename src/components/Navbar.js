import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logoceramica.png';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
    
  
  },
  appBar: {
    backgroundColor: 'yellow',
  
   
  },
  
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: '10px',
    height: '4rem',
  },
 
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            className={classes.menuButton}
          >
            <img src={logo} className={classes.image} alt="Logo" />
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" component="p" color="textPrimary">
            Hola perro
          </Typography>
          <div className={classes.button}>
            <Button variant="contained">
            <strong>Sign in</strong>
            </Button>

            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
              <ShoppingCartIcon fontSize="large"/> 
              </Badge>
            
            </IconButton>
             
            
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
      
  );
}
