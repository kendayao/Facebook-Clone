import React ,{useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useStateValue} from '../../contextAPI/StateProvider'
import {auth} from '../../firebase/firebase';



function Header() {
    const [{user, username}, dispatch] = useStateValue();
    const [openDropdown, setOpenDropdown]=useState(false);

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt='facebook logo'/>
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text' placeholder='Search Facebook'/>
                </div>
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    {user.photoURL?<Avatar src={user.photoURL} />: <Avatar src="/static/images/avatar/1.jpg" alt={user.displayName} />}
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton >
                    <AddIcon className='header__icon'/>
                </IconButton>
                <IconButton >
                    <ForumIcon className='header__icon'/>
                </IconButton>
                <IconButton >
                    <NotificationsActiveIcon className='header__icon' />
                </IconButton>
                <IconButton onClick={()=>openDropdown?setOpenDropdown(false): setOpenDropdown(true)}>
                    <ExpandMoreIcon className='header__icon--display' />
                </IconButton>
            </div>
            <div className={`header__dropdown ${openDropdown?'.header__dropdown--show': 'header__dropdown--hide'}`}>
                <p onClick={()=>auth.signOut()}>Log Out</p>
            </div>
        </div>
    )
}

export default Header
