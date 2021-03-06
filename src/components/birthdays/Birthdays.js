import React from 'react'
import './Birthdays.css'
import {useStateValue} from '../../contextAPI/StateProvider'
import RedeemTwoToneIcon from '@material-ui/icons/RedeemTwoTone';

function Birthdays() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='birthdays'>
            <h3>Birthdays</h3>
            <div className='birthdays__content'>
                <div className='birthdays__icon' >
                    <RedeemTwoToneIcon style={{ fontSize: 30 }}color="primary" />
                </div>
                <div className='birthdays__text'>
                    <span className='birthdays__name'>{user.displayName}</span><span>'s birthday is today.</span>
                </div>
            </div>
           
        </div>
    )
}

export default Birthdays
