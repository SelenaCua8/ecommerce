import { useState } from 'react';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },

  cardActions:{
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',

  },
//   cardRating:{
//     display: 'flex',
//   }
  
}));

export default function CheckoutCard({
  product: { id, name, image, price, description },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography className={classes.action} variant='h5' color='textSecondary'>
            {accounting.formatMoney(price, '$')}
          </Typography>
        }
        title={name}
        subheader='in stock'
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardActions disableSpacing className={classes.cardActions}>
             {/* <div className={classes.cardRating}>
                {Array(rating)
                .fill()
                .map((_, i) =>(
                <p>&#11088</p>
                     ))}
            </div> */} 
          
         <IconButton aria-label='Delete'>
              <DeleteIcon fontSize='large' onClick={removeItem} />
        </IconButton>
    </CardActions>
    </Card>
  );
}