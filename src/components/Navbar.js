import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logoceramica.png';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
    
  
  },
  appBar: {
    backgroundColor: '#6B8275',
  
   
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
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <Link to='/'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            className={classes.Button}
          >
            <img src={logo} className={classes.image} alt="Logo" />
          </IconButton>
          </Link>
          
          <div className={classes.grow}/>
          <Typography variant="h6" component="p" color="textPrimary">
            Hola perro
          </Typography>
          <div className={classes.button}>
            <Link to='/signin'>
            <Button variant="contained" color='secondary'>
            <strong>Sign in</strong>
            </Button>
            </Link>
            
            <Link to='checkout-page'>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={basket?.length} color='secondary'>
              <ShoppingCartIcon fontSize="large"/> 
              </Badge>
             </IconButton>
            </Link>

            
             
            
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
      
  );
}
