import React from 'react';
import './Feed.css'
import StoryReel from '../storyreel/StoryReel'
import MessageSender from '../message-sender/MessageSender'
import Post from '../post/Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
            <Post  />
        </div>
    )
}

export default Feed
