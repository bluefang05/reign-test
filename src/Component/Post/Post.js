import React, {useState} from 'react';
import  {ago} from 'time-ago';
import './Post.css';


function Post(props) {

  let [fav, setFav] =useState(false);
  let [favorite, setFavorite] = useState();

  if (localStorage.length){

  }
  else{
    localStorage.setItem('arr', [])
  }
  //TimeAgo.format(new Date(props.time))
  return (
    <div className='post'>
        <div className='post-content'>
            <div className='post-time'>{ago(props.time )+ " by " + props.author }</div>
            <div className='post-title'>{props.title}</div>
        </div>
        <div className='post-fav'><img onClick={()=>{setFav(!fav);}} src={''} alt={ fav ? "fav": "nofav" }></img></div>
    </div>
  )
}

export default Post