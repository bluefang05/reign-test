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
  let verifyId = JSON.parse(localStorage.getItem('favs')).includes(props.id) ? true : false;
  let [fav, setFav] = useState(verifyId);

  function addFav(id){
    let savedFavs = JSON.parse(localStorage.getItem('favs')) ?? [];
    savedFavs.push(id);
    localStorage.setItem('favs',JSON.stringify(savedFavs));
    setFav(true)
  }

  function removeFav(id){
    let savedFavs = JSON.parse(localStorage.getItem('favs')) ?? [];
    savedFavs = savedFavs.filter( el => el !== id);
    localStorage.setItem('favs',JSON.stringify(savedFavs));
    setFav(false)
  }

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 11 }} variant="h6" color="text.secondary" gutterBottom>
        <AccessTimeIcon/> {ago(props.time )+ " by " + props.author }
      </Typography>
      <Typography onClick={()=>{window.open(props.url, '_blank').focus();}} sx={{ mb: 1.5 }} color="text.secondary">
        {props.title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={fav ? ()=>removeFav(props.id) : ()=>addFav(props.id)}>
        {(fav || verifyId) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
      </Button>
    </CardActions>
  </Card>
  )
}