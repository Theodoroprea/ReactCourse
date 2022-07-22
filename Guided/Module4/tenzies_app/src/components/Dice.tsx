import React from "react";

export default function Dice(props:any) {
    const styles = {
            backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
        }
    
    return(
        <>
            <div 
                className="dice"
                style={styles}
                onClick={props.holdDice}
            >
                <h2 className="dice-val">{props.value}</h2>
            </div>
        </>
    )
}