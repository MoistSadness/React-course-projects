import React from "react";

export default function Title(props){
    return (
        <div>
            <h1>Title</h1>
            <button onClick={props.startGame}>Enter Game</button>
        </div>
    )
}