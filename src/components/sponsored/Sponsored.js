import React from 'react'
import './Sponsored.css'

function Sponsored() {
    return (
        <div className='sponsored'>
            <h3>Sponsored</h3>
            <div className='sponsored__content'>
                <div className='sponsored__image'>
                    <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t45.5328-4/c0.0.800.800a/89778285_3592541550817097_8859157616153067520_n.jpg?_nc_cat=109&ccb=2&_nc_sid=c48759&_nc_ohc=8lMWuVZqs5IAX_QEEK8&_nc_ht=scontent-lax3-1.xx&_nc_tp=29&oh=81a0898872adcba519be9c8d5257327f&oe=601AF27D' alt='sponsor' />
                </div>
                <div className='sponsored__text'>
                    <p>The Bay</p>
                    <p>shop.thebay.com</p>
                </div>
            </div>
            <div className='sponsored__content'>
                <div className='sponsored__image'>
                    <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/85833978_23844333896820372_2885392182305357824_n.png.jpg?_nc_cat=104&ccb=2&_nc_sid=67cdda&_nc_ohc=9itrCbtgzDgAX88qchr&_nc_ht=scontent-lax3-1.xx&oh=69f559c5fb9d4b800082fefd65a9a991&oe=60190F71' alt='sponsor' />
                </div>
                <div className='sponsored__text'>
                    <p>State Farm</p>
                    <p>statefarm.com</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsored
