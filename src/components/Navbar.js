// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import logo from '../assets/logoceramica.png';
// import { makeStyles } from '@mui/styles';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Badge } from '@mui/material';
// import { useStateValue } from '../StateProvider';
// import {useHistory} from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginBottom: '7rem',
    
  
//   },
//   appBar: {
//     backgroundColor: '#6B8275',
  
   
//   },
  
//   grow: {
//     flexGrow: 1,
//   },
//   button: {
//     marginLeft: theme.spacing(2),
//   },
//   image: {
//     marginRight: '10px',
//     height: '4rem',
//   },
 
// }));

// export default function Navbar() {
//   const classes = useStyles();
//   const [{basket, user}, dispatch] = useStateValue();
//   const history = useHistory()
// const handleAuth = () =>{
//   if (user){
//     auth.signOut();
//     dispatch({
//       type: actionTypesTypes.SET_USER,
//       user: null,

//     });
//     dispatch({
//       type: actionTypesTypes.EMPTY_BASKET,
//       basket:  [],

//     });
//     history.push('/')
//   }
// }

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed">
//         <Toolbar className={classes.appBar}>
//           <Link to='/'>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2}}
//             className={classes.Button}
//           >
//             <img src={logo} className={classes.image} alt="Logo" />
//           </IconButton>
//           </Link>
          
//           <div className={classes.grow}/>
//           <Typography variant="h6" component="p" color="textPrimary">
//             Hola {user ? user.name : "Perro"}
//           </Typography>
//           <div className={classes.button}>
//             <Link to='/signin'>
//             <Button variant="contained" color='secondary' onClick={handleAuth}>
//             <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
//             </Button>
//             </Link>
            
//             <Link to='checkout-page'>
//             <IconButton aria-label='show cart items' color='inherit'>
//               <Badge badgeContent={basket?.length} color='secondary'>
//               <ShoppingCartIcon fontSize="large"/> 
//               </Badge>
//              </IconButton>
//             </Link>

            
             
            
//           </div>
//         </Toolbar>
//       </AppBar>
    
//     </div>
      
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
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
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

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
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.button}
            >
              <img src={logo} className={classes.image} alt="Logo" />
            </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" component="p" color="textPrimary">
            Hola {user ? user.name : 'Perro'}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAuth}
              >
                <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
              </Button>
            </Link>

            <Link to="/checkout-page">
              <IconButton
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCartIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}