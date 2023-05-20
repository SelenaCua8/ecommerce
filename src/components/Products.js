import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));
// const Product = () => {
//   return <div> <Product/> </div>;
// };
export default function Products() {
  return (
    <Box>
      <Grid container spacing={0.5}>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
         <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Product/>
        </Grid>
      </Grid>
    </Box>
  );
}
