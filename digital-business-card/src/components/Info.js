import React from 'react'
import Dio from '../Dio.jpg'

export default function Info(){
    return(
        <div className='info-container'>
            <img src={Dio} />
            <h1>Dio Brando</h1>
            <p className='title'>Pure Masculinity</p>
            <p className='website'>dio.brando.com</p>
            <div className='button-container'>
                <button className='email-button'>Email</button>
                <button className='linkedin-button'>LinkedIn</button>
            </div>
        </div>
    )
}