import React from "react"
import { useState } from "react"
import uuid from 'react-uuid'

export default function Question(props){
    function styleAnswer(answer){
        if(props.isGraded && props.selected === answer){
            return props.correctAnswer === answer && props.selected ? "answer correct" : "answer incorrect"
        }else{
            return props.selected === answer ? "answer selected" : "answer"
        }
    }

    const allAnswers = props.allAnswers.map(answer => (
        <div 
            key={uuid()}
            className={styleAnswer(answer)}
            onClick={props.isGraded ? () => null : () => props.handleSelected(props.id, answer)}
        >
            <div>{answer}</div>
        </div>
    ))

    return( 
        <div className="question-container">
            <h3>{props.question}</h3>
            <div 
                className="answer-container">{allAnswers}
            </div>
        </div>
    )
}