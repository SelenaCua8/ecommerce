// import { ClassNames } from '@emotion/react'
// import React from 'react'
// import accounting from 'accounting'
// import { getBasketTotal } from '../reducer'
// import { useStateValue } from '../StateProvider';

// const useStyles = makeStyles((theme) =>({

//     root:{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '20vh',
//     },

//     button: {
//         marginTop: '2rem',
//         },

// }))

// const Total = () => {
//     const classes = useStyles()
//     const [{basket}, dispatch] = useStateValue();
//   return (
//     <div className={ClassNames.root}>
//         <h5>Total tiems: {basket?.length} </h5>
//         <h5>{accounting.formatMonry(getBasketTotal, '$')}</h5>
//         <Button className={ClassNames.button} variant='contained' color='secondary'>Check out</Button>
//      </div>
//   )
// }

// export default Total


//PROBANDO CODIGO CORREGIDO ERRORES MINIMOS

import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import Button from '@mui/material/Button';
import accounting from 'accounting';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },
  button: {
    marginTop: '2rem',
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), '$')}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check out
      </Button>
    </div>
  );
};

export default Total;