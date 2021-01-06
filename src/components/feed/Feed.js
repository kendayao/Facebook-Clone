import React, {useState, useEffect} from 'react';
import './Feed.css'
import StoryReel from '../storyreel/StoryReel'
import MessageSender from '../message-sender/MessageSender'
import Post from '../post/Post'
import db from '../../firebase/firebase'

function Feed() {

    const [posts, setPost]=useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>(
            setPost(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))
        ))
    },[])


    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender />
            {posts.map((post)=>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />


            ))}
        </div>
    )
}

export default Feed
