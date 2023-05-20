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

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: '3rem',
    backgroundColor:  '#6B8275',
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

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              {accounting.formatMoney(50, '$')}
            </Typography>
          }
          title='Taza'
          subheader='En stock'
        />
        <CardMedia
          className={classes.media}
          image='https://i.pinimg.com/564x/ed/b7/ff/edb7ff2c26e239ed8090f44bdfedc9f7.jpg'
          title='Taza'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Taza Luna
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <AddShoppingCart fontSize='large' />
          </IconButton>
          <IconButton>
            {[...Array(1)].map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
          </IconButton>
          <IconButton onClick={handleExpandClick}>
            <ExpandMoreIcon
              className={expanded ? classes.expandOpen : classes.expand}
            />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Taza de Luna bañada en oro</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
