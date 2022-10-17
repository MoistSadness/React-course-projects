import React from "react"
import globe from '../static/globe-icon.png'

export default function Card(props) {
    return (
        <nav >
            <div className="nav-item">
                <img src={globe}/>
                My Travel Journal
            </div>
        </nav>
    )
}