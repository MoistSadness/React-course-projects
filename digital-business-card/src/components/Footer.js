import React from 'react'

import Twitter from '../Twitter.png'
import Facebook from '../Facebook.png'
import Instagram from '../Instagram.png'
import GitHub from '../GitHub.png'

export default function Info(){
    return(
        <nav className='nav-container'>
            <img src={Twitter} className='icon' />
            <img src={Facebook} className='icon' />
            <img src={Instagram} className='icon' />
            <img src={GitHub} className='icon' />

        </nav>
    )
}