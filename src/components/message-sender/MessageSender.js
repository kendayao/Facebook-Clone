import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../../contextAPI/StateProvider'
import db from '../../firebase/firebase'


function MessageSender() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput]=useState('');
    const [imageUrl, setImageUrl]=useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: new Date(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        db.collection('contacts').add({
            username: user.displayName,
            profilePic: user.photoURL
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
            {user.photoURL?<Avatar src={user.photoURL} />: <Avatar src="/static/images/avatar/1.jpg" alt={user.displayName} />}
                <form>
                    <input value={input} onChange={event=>setInput(event.target.value)} type='text' className='messageSender__input' placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input value={imageUrl} onChange={event=>setImageUrl(event.target.value)} type='text' placeholder='image URL (Optional)' />
                    <button className={input?'messageSender__button messageSender__button--enabled':'messageSender__button messageSender__button--disabled'} disabled={!input} onClick={handleSubmit} type='submit'>Post</button>
                </form> 
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
