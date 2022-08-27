import React, { createContext } from 'react';
import Post from '../Post/Post';
import Box from '@mui/material/Box';
import './BodyPost.css';

const PostContext = createContext();

export default function BodyPost(props){
    const favoriteCards = createContext([]);
    return <PostContext.Provider value={favoriteCards}>
    <Box className="body-post">
        {props.data.map((element, key) => (
            <Post 
                created_at={element.created_at}
                author={element.author} 
                key={key+"-"+Date.now()} 
                title={ element.title? element.title : element.story_title} time={element.created_at}
                id={element.objectID}
            /> 
        ))}
    </Box>
    </PostContext.Provider>
}