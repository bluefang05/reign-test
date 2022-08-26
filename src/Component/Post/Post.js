import React from 'react';
import  {ago} from 'time-ago';
import './Post.css';


function Post(props) {

  //TimeAgo.format(new Date(props.time))
  return (
    <div className='post'>
        <div className='post-content'>
            <div className='post-time'>{ago(props.time)}</div>
            <div className='post-title'>{props.title}</div>
        </div>
        <div className='post-fav'><img src={''} alt='heart'></img></div>
    </div>
  )
}

export default Post