import React from "react";
import {useState, useEffect} from "react"
import Dice from './Dice.js'
import Button from './Button'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function createArray(){
    let defaultArray =[]
    for (let i = 0; i < 10; i++){
        const newElement = {
            key:i,
            value:getRandomInt(1,7),
            isHeld: false
        }
        defaultArray.push(newElement)
    }
    console.log(defaultArray)
    return defaultArray
}

export default function App(){
    const defaultArray = createArray()

    const [diceArr, setDiceArr] = useState(defaultArray)
    const [isWinner, setIsWinner] = useState(false)

    const diceElements = diceArr.map(dice => (
        <Dice 
            key={dice.key}
            index={dice.key}
            value={dice.value}
            isHeld={dice.isHeld}
            flipHeld={() => holdDice(dice.key)}
        />
    ))

    function holdDice(key){
        console.log('flipped', key)
        setDiceArr(oldDice => oldDice.map(dice => {
            /*
            If the key passed into the function matches the index of diceArr, 
            make changes, otherwise leave it alone
            */
            return dice.key === key ? {...dice, isHeld:!dice.isHeld} : dice
        }))
    }

    function rollDice(){
        //setDiceArr(createArray())
        console.log('rolling')
        setDiceArr(oldDice => oldDice.map(dice =>{
            return dice.isHeld ? dice : {...dice, value: getRandomInt(1,7)}
        }))
    }

    // Detect winner
    useEffect(()=> {
        console.log('state changed')
        const allHeld = diceArr.every(dice => dice.isHeld)
        const firstDice = diceArr[0]
        const allDiceValuesTheSame = diceArr.every(dice => dice.value === diceArr[0].value)
            
        if (allHeld && allDiceValuesTheSame){
            setIsWinner(true)
            console.log("You're Winner!")
        }
    }, [diceArr])

    function resetArray(){
        const newArr = createArray()
        setDiceArr(newArr)
        setIsWinner(false)
        console.log("Created new array")
    }

    return(
        <main className="app-container">
            <div className="inner-container">
                <div className="game-container">
                    <h2 className="title">Tenzies</h2>
                    <p>Roll until all the dice are the same. Click each die to freeze it at it's current value between rolls</p>
                    <div className="dice-container">
                        {diceElements}
                    </div>
                    <Button 
                        isWinner={isWinner}
                        rollDice={rollDice}
                        resetArray={resetArray}
                    />
                </div>
            </div>
        </main>
    )
} 