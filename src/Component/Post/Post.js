import React, {useState} from 'react';
import  {ago} from 'time-ago';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Post.css';

export default function Post(props) {
  let [fav, setFav] =useState(false);

  if(!(localStorage.length)) localStorage.setItem('arr', [])

  return (
    <div className='post'>
        <div className='post-content'>
            <div className='post-time'>
              <AccessTimeIcon/> {ago(props.time )+ " by " + props.author }
            </div>
            <div className='post-title'>
              {props.title}
            </div>
        </div>
        <div className='post-fav'onClick={()=>setFav(!fav)}>
          {fav ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </div>
    </div>
  )
}