import React from "react";

// Span allows us to keep it inline with whatever was before.
export default function Card(props:any){

    let badgeText:string = "";   
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            { badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={require(`../../public/images/${props.coverImg}`)}></img>
            <div className="card--description">
                <img className="card--star" src={require("../pictures/Star 1.png")} alt="Star"></img>
                <span> {props.stats.rating} </span>
                <div className="card--stats">
                    <span className="gray"> ({props.stats.reviewCount}) - </span>
                    <span className="gray"> {props.location}</span>
                </div>
            </div>
            <p className="card--title">{props.title}</p>    
            <p className="card--price"><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}