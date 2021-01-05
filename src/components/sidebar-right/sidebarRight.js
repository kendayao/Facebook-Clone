import React from 'react'
import './sidebarRight.css'
import Sponsored from '../sponsored/Sponsored'
import Birthdays from '../birthdays/Birthdays'
import Contacts from '../contacts/Contacts'

function sidebarRight() {
    return (
        <div className='sidebarRight'>
            <Sponsored/>
            <Birthdays/>
            <Contacts/>
        </div>
    )
}

export default sidebarRight
