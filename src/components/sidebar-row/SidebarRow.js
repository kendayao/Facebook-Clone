import React from 'react'
import './SidebarRow.css'
import {Avatar} from '@material-ui/core'
import {auth} from '../../firebase/firebase';

function SidebarRow({src, alt, Icon, title,logout, test}) {
    return (
        <div className='sidebarRow' onClick={logout?()=>auth.signOut():null}>
            {src && <Avatar src={src} alt={alt}/>} {test && !src?<Avatar src="/static/images/avatar/1.jpg" alt={alt} />:null}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
