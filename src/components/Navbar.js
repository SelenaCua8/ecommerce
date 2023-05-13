import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logoceramica.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
    backgroundColor: 'green',
  },
  appBar: {
    backgroundColor: 'blue',
   
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.menuButton}
          >
            <img src={logo} className={classes.image} alt="Logo" />
          </IconButton>
          <Typography variant="h6" component="div" color="textPrimary">
            hello guest
          </Typography>
          <div className={classes.button}>
            <Button variant="filled">
            <strong>Sign in</strong>
            </Button>
            {/* <shoppingCart fontSize="large" color="primary"/> */}
            
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
