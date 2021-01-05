import React from 'react'
import './Contacts.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Contacts() {
    return (
        <div className='contacts'>
            <div className='contacts__header'>
                <div className='contacts__title'>
                    <h3>Contacts</h3>
                </div>
                <div className='contacts__icons'>
                    <VideoCallIcon/>
                    <SearchIcon />
                    <MoreHorizIcon/>
                </div>
            </div>
           
            
        </div>
    )
}

export default Contacts
