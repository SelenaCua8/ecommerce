import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import App from '../App';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <Typography
          className='classes.action'
          variant='h5'
          color='textSecondary'
          >
            {50}
          </Typography>
            
        }
       
        title="Taza"
        subheader="En stock"
      />
      <CardMedia
        component="img"
        height="500"
        img src='https://i.pinimg.com/564x/ed/b7/ff/edb7ff2c26e239ed8090f44bdfedc9f7.jpg'
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a description of the product. You can provide details, features,
          and any other information about the product here.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Additional information about the product can be displayed here.
          </Typography>
          <Typography paragraph>
            You can provide step-by-step instructions, specifications, or any other
            relevant details.
          </Typography>
          <Typography>
            Feel free to customize this component to fit your specific product needs.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}