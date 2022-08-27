import React, {useState, useEffect, useContext} from 'react';
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
  let [fav, setFav] =useState([false]);
  let favs = JSON.parse(localStorage.getItem('fav')); 
  console.log(favs, "<--------------")
  console.log("message", localStorage);

  function handleFav(){
    setFav(!fav);
    console.log("favs", favs)
   let favInLS = favs.includes(props.id);
   if(fav  ){addFav();}else{removeFav()}
  }


  function addFav(){
    favs.push(props.id);
    localStorage.setItem('fav',JSON.stringify(favs)); 
  }
  function removeFav(){
    favs.filter( el => el !== props.id);
    localStorage.setItem('fav',JSON.stringify(favs));
  }
  
  useEffect( ()=>{
    
   // console.log(favs)
   handleFav();
    

  }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 11 }} variant="h6" color="text.secondary" gutterBottom>
        <AccessTimeIcon/> {ago(props.time )+ " by " + props.author }
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.title} {props.id}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>handleFav()}>
        {fav ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
      </Button>
    </CardActions>
  </Card>
  )
}