// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Product from './Product';
// import { makeStyles } from '@mui/styles';


// const Item = styled(Paper)(({ theme }) => ({
//   root:{
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     backgroundColor: 'green',
//   }
  
// }));
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { makeStyles } from '@mui/styles'; // Cambio en la importación

const Item = styled(Paper)(({ theme }) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'green',
  }
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

// const Product = () => {
//   return <div> <Product/> </div>;
// };
export default function Products() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
<Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
         <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
      </Grid>
    </div>
    
      
   
  );
}
