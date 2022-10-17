import React from 'react'
import trollFace from '../static/Troll Face.png'

export default function Card(props) {
    return (
        <nav>
            <div className='nav-item'>
                <img src={trollFace} className='logo-img'/>
                <h2 className='logo-title'>Meme Generator</h2>
            </div>
            <h4 className='nav-item'>
                React course - Project 3
            </h4>
        </nav>
    )
}