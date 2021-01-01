import React from 'react';
import './Feed.css'
import StoryReel from '../storyreel/StoryReel'
import MessageSender from '../message-sender/MessageSender'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
        </div>
    )
}

export default Feed
