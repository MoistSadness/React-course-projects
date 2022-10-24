import React from "react";
import { useState, useEffect } from "react";
import Question from "./Question";

import uuid from 'react-uuid'

export default function Quizzical(props){
    // State that stores quiz information
    const [quiz, setQuiz] = useState([])

    // State that determines if the quiz is to be graded or not
    const [isGraded, setIsGraded] = useState(false)

    // State that stores if the quiz is to be resetted or or not
    // The value doesn't matter, it just needs to change in order to trigger useEffect
    const [isResetted, setIsResetted] = useState(false)

    // Get trivia questions from API and store in quiz state
    useEffect(() =>{
        fetch('https://opentdb.com/api.php?amount=5')
            .then((response) => response.json())
            .then((data) => (setQuiz(data.results.map(
                trivia => ({
                    ...trivia, 
                    id: uuid(), 
                    selected: '', 
                    allAnswers: [...trivia.incorrect_answers, trivia.correct_answer]
                })
            ))));
    },[isResetted])

    console.log(quiz)
    console.log(isGraded)

    //  When a user clicks on an answer, update state to store the user's selection
    function handleSelected(id, answer){
        console.log('Clicked ', id, answer)
        setQuiz(prevQuiz => prevQuiz.map(obj => {
            if (obj.id === id) {
                return {...obj, selected: answer}
            } else {
                return obj
            }
        }))
    }

    const displayQuiz = quiz.map(data => (
        <div className="quiz-container">
            <Question 
                key={uuid()}
                id={data.id}
                question={data.question}
                type={data.type}
                allAnswers={data.allAnswers}
                incorrectAnswers={data.incorrect_answers}
                correctAnswer={data.correct_answer}
                selected={data.selected}
                handleSelected={handleSelected}
                isGraded={isGraded}
            />
        </div>
    ))

    function gradeQuiz(){setIsGraded(prevGrade => !prevGrade)}
    function resetQuiz(){
        setIsGraded(false)
        setIsResetted(prevReset => !prevReset)
    }
    
    //  Render quiz here
    return (
        <div className="quiz-container">
            {displayQuiz}
            <button
                className="submit"
                onClick={isGraded ? resetQuiz : gradeQuiz}
            >{isGraded ? "Reset" : "Submit"}</button>
        </div>
    )
}
