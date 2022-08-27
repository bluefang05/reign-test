import React from 'react';
import Post from '../Post/Post';

export default function BodyPost(props){
    return props.data.map((el, i) => (
        <Post 
            created_at={el.created_at}
            author={el.author} 
            key={i+"-"+Date.now()} 
            title={ el.title? el.title : el.story_title} time={el.created_at}
        /> 
    ))
}