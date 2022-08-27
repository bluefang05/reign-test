import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  {ago} from 'time-ago';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Post.css';

export default function Post(props) {
  let [fav, setFav] =useState(false);

  if(!(localStorage.length)) localStorage.setItem('arr', [])

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 11 }} variant="h6" color="text.secondary" gutterBottom>
        <AccessTimeIcon/> {ago(props.time )+ " by " + props.author }
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>setFav(!fav)}>
        {fav ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
      </Button>
    </CardActions>
  </Card>
  )
}