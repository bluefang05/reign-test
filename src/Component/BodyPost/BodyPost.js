import React from 'react';
import Post from '../Post/Post';
import Box from '@mui/material/Box';
import './BodyPost.css'

export default function BodyPost(props){
    return <Box className="body-post">
        {props.data.map((el, i) => (
            <Post 
                created_at={el.created_at}
                author={el.author} 
                key={i+"-"+Date.now()} 
                title={ el.title? el.title : el.story_title} time={el.created_at}
            /> 
        ))}
    </Box>
}