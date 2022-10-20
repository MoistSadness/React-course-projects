import React from "react";

export default function(props){
    return(
        <button 
            className="submit"
            onClick={props.isWinner ? props.resetArray : props.rollDice}
        >{props.isWinner ? 'Reset' : 'Roll'}</button>
    )
}