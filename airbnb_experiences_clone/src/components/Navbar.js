import React from 'react'

import airbnb from '../static/airbnb-logo.png'

export default function Navbar(){
    return(
        <nav className='nav-container'>
            <img src={airbnb} className='logo' />
        </nav>
    )
}