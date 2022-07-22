import React from "react";
import Dice from "./components/Dice"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){

    const [newDice, setNewDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const result = newDice.every(element => {
            if(element.value === newDice[0].value && element.isHeld){
                return true;
            }
            return false;
        })

        if(result){
            setTenzies(true)
            console.log("You win!")
        }
    },[newDice])

    function allNewDice(){
        let newNumbers: any[] = []
        for(let i = 0; i < 10; i++){
            newNumbers.push(generateNewDie());
        }
        return newNumbers 
    }

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function roll(){
        setNewDice(oldDice=> oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie() 
        }))
    }

    function rollNewGame(){
        setNewDice(oldDice=> oldDice.map(die => generateNewDie()))
        setTenzies(false)
    }

    function holdDice(id:any){
        setNewDice((prevDice) => prevDice.map(die => {
            return (die.id === id) ? 
                {...die, isHeld: !die.isHeld} : 
                die;
        }));
    }


    const diceElements = newDice.map(die => (
        <Dice 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)}
        />
    ))

    return(
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll_button" 
                onClick={tenzies ? rollNewGame : roll}
            >
                {tenzies ? "New Game!":"Roll Dice!"}
            </button>
        </main>
    )
}