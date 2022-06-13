import React from "react";

export default function Joke(props:any){
    console.log(props.setup)
    return(
        <div>
            <h1>{props.setup}</h1>
            <p>{props.punchline}</p>
            <hr/>
        </div>
    )
}