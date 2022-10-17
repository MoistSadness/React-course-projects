import React from 'react'

import gridImg from '../static/photo-grid.png'

export default function Hero() {
    return (
        <div className='hero-container'>
            <img src={gridImg} className='hero-img' />
            <h1 className='hero-title body-fonts'>Online Experiences</h1>
            <p className='hero-description body-fonts'>
                Join unique interactice activities led by one-of-a-kind hosts - all without leaving home
            </p>
        </div>
    )
}