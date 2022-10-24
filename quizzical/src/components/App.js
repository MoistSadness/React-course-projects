import React from "react";
import { useState } from 'react';
import blobstop from '../public/blobs-top-right.png'
import blobsbot from '../public/blobs-bottom-left.png'
import Title from './Title.js'
import Quizzical from './Quizzical.js'

export default function App(){
    const [isTitle, setIsTitle] = useState(true)

    return (
        <div className="app-container">
            
            {isTitle ? <Title startGame={() => setIsTitle(prevState => !prevState)}/> : <Quizzical />}
            
        </div>
    )
}