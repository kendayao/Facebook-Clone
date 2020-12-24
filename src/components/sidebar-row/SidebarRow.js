import React from 'react'
import './SidebarRow.css'
import {Avatar} from '@material-ui/core'

function SidebarRow({src, alt, Icon, title}) {
    return (
        <div className='slidebarRow'>
            {alt && <Avatar alt={alt}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
