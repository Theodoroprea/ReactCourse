import React from "react";
import Joke from "./Joke";

export default function App(){
    return(
        <div>
            <Joke setup={25} punchline="punch1"/>
            <Joke setup="joke2" punchline="punch2"/>
            <Joke setup="joke3" punchline="punch3"/>
            <Joke setup="joke4" punchline="punch4"/>
        </div>
        
    )
}