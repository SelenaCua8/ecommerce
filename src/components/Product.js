import React from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer';



const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: '3rem',
    backgroundColor:  '#6B8275', //no me toma el color en la card 
  },
  action: {
    marginTop: '1rem',
    
  },
  media: {
    height: 0,
    paddingTop: '25rem',
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    
  },

}));

export default function Product({product}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const {id,name,price,image,description} = product;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type:actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        image,
         price,
        description,
      }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(price, '$')}
            </Typography>
          }
          subheader='En stock'
          title={name}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          {/* <Typography variant='body2' color='text.secondary'>
            {productType}
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to Cart' onClick={addToBasket}>
            <AddShoppingCart fontSize='large' />
          </IconButton>
          <IconButton>
            {[...Array(1)].map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
          </IconButton>
          {/* <IconButton>
  {[...Array(1)].map((_, i) => (
    <p key={i}>{String.fromCharCode(11088)}</p>
  ))}
</IconButton> */}
          <IconButton onClick={handleExpandClick}>
            <ExpandMoreIcon
              className={expanded ? classes.expandOpen : classes.expand}
            />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
