import React from 'react'
import './Sidebar.css'
import SidebarRow from '../sidebar-row/SidebarRow'
import { ExpandMoreOutlined } from '@material-ui/icons'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useStateValue} from '../../contextAPI/StateProvider'


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow test src={user.photoURL} title={user.displayName} alt={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow logout Icon={ExitToAppIcon} title='Log Out'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
 
        </div>
    )
}

export default Sidebar
