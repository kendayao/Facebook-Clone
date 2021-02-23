import React from 'react'
import './Sponsored.css'

function Sponsored() {
    return (
        <div className='sponsored'>
            <h3>Sponsored</h3>
            <div className='sponsored__content'>
                <div className='sponsored__image'>
                    <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/147139789_6225340478291_7261414358252904123_n.png.jpg?_nc_cat=1&ccb=3&_nc_sid=67cdda&_nc_ohc=Xt53DpqpCZoAX-HqE6n&_nc_ht=scontent-lax3-1.xx&_nc_tp=31&oh=b55d0fcf4489746204f2e0c97842a811&oe=605A2AB6' alt='sponsor' />
                </div>
                <div className='sponsored__text'>
                    <p>The Greenhouse</p>
                    <p>greenhouse.com</p>
                </div>
            </div>
            <div className='sponsored__content'>
                <div className='sponsored__image'>
                    <img src='https://scontent-lax3-2.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/134902004_23846504633830454_8637752447220705755_n.png.jpg?_nc_cat=107&ccb=3&_nc_sid=67cdda&_nc_ohc=3NAYw_lHkBwAX8NZsZH&_nc_ht=scontent-lax3-2.xx&_nc_tp=31&oh=b79ca8197ad471848246e683a826298d&oe=60584709' alt='sponsor' />
                </div>
                <div className='sponsored__text'>
                    <p>Resume Builder</p>
                    <p>resume.com</p>
                </div>
            </div>
        </div>
    )
}

export default Sponsored
