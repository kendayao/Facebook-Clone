import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../../contextAPI/StateProvider'



function MessageSender() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput]=useState();
    const [imageUrl, setImageUrl]=useState('');

    const handleSubmit = event =>{
        event.preventDefault();

        setInput("");
        setImageUrl("");
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={event=>setInput(event.target.value)} type='text' className='messageSender__input' placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input value={imageUrl} onChange={event=>setImageUrl(event.target.value)} type='text' placeholder='image URL (Optional)' />
                    <button onClick={handleSubmit} type='submit'>Hidden submit</button>
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