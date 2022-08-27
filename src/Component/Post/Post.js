import React, {useState} from 'react';
import  {ago} from 'time-ago';
import './Post.css';

export default function Post(props) {

  let [fav, setFav] =useState(false);

  if(!(localStorage.length)) localStorage.setItem('arr', [])

  return (
    <div className='post'>
        <div className='post-content'>
            <div className='post-time'>
              {ago(props.time )+ " by " + props.author }
            </div>
            <div className='post-title'>
              {props.title}
            </div>
        </div>
        <div className='post-fav'>
          <img onClick={()=>{setFav(!fav);}} src={''} alt={ fav ? "fav": "nofav" }/>
        </div>
    </div>
  )
}