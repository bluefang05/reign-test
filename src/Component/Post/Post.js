import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className='post'>
        <div className='post-content'>
            <div className='post-time'>{props.time}</div>
            <div className='post-title'>{props.title}</div>
        </div>
        <div className='post-fav'><img src={''} alt='heart'></img></div>
    </div>
  )
}

export default Post