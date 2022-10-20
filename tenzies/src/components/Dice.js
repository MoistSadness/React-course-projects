import React from "react";

export default function Dice(props){
    return(
        <div 
            className={props.isHeld ? "dice dice-held": "dice"}
            onClick={(event) => props.flipHeld(event, props.index)}
        >
            <h3>{props.value}</h3>
        </div>
    )
}