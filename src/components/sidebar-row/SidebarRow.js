import React from 'react'
import './SidebarRow.css'
import {Avatar} from '@material-ui/core'

function SidebarRow({src, alt, Icon, title}) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} alt={alt}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
