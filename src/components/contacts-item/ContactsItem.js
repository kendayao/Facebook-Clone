import React from 'react'
import './ContactsItem.css'
import { Avatar } from '@material-ui/core'

function ContactsItem({username, profilePic}) {
    return (
        <div className='contactsItem'>
            <div className='contactsItem__row'>
                <div className='contactsItem__avatar'>
                    {profilePic ? <Avatar src={profilePic} />: <Avatar src="/static/images/avatar/1.jpg" alt={username}/>}
                    <div className='contactsItem__status'>
                    </div>
                </div>
                <div className='contactsItem__name'>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsItem
